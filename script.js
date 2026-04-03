// ─── EMAILJS CONFIG ───────────────────────────────────────────
        const EMAILJS_PUBLIC_KEY = 'JCxxt6rLUuOvGPTj8';
        const EMAILJS_SERVICE_ID = 'service_bpi9y6p';
        const EMAILJS_TEMPLATE_ID = 'template_s8p0sga';
        emailjs.init(EMAILJS_PUBLIC_KEY);

        // DYNAMIC DATES
        (function syncDynamicDates() {
            const now = new Date();
            const year = now.getFullYear();
            const monthYearShort = now.toLocaleString('en-US', { month: 'short', year: 'numeric' });

            function monthsDiff(fromDate, toDate) {
                let months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
                months += toDate.getMonth() - fromDate.getMonth();
                if (toDate.getDate() < fromDate.getDate()) months -= 1;
                return Math.max(0, months);
            }

            function formatDuration(totalMonths) {
                const years = Math.floor(totalMonths / 12);
                const months = totalMonths % 12;
                if (years === 0) return `${months} month${months === 1 ? '' : 's'}`;
                if (months === 0) return `${years} yr${years === 1 ? '' : 's'}`;
                return `${years} yr${years === 1 ? '' : 's'} ${months} mo`;
            }

            const currentYearEl = document.getElementById('currentYear');
            if (currentYearEl) currentYearEl.textContent = String(year);

            // Generic hook: set dynamic date placeholders from data-date.
            document.querySelectorAll('[data-date]').forEach(el => {
                const mode = el.getAttribute('data-date');
                if (mode === 'year') {
                    el.textContent = String(year);
                } else if (mode === 'month-year-short') {
                    el.textContent = monthYearShort;
                } else if (mode === 'duration') {
                    const startRaw = el.getAttribute('data-start');
                    if (!startRaw) return;
                    const start = new Date(startRaw);
                    if (Number.isNaN(start.getTime())) return;
                    const totalMonths = monthsDiff(start, now);
                    el.textContent = formatDuration(totalMonths);
                }
            });

            // Mobile timeline uses .exp-year::after; keep it synced with the dynamic text.
            document.querySelectorAll('.exp-year').forEach(el => {
                const current = el.querySelector('span[data-date]');
                if (current && current.textContent) {
                    el.setAttribute('data-current', current.textContent.trim());
                }
            });
        })();
        // ─────────────────────────────────────────────────────────────
        // CURSOR
        const cursor = document.getElementById('cursor');
        const ring = document.getElementById('cursorRing');
        const glow = document.getElementById('cursorGlow');
        let mx = 0, my = 0, rx = 0, ry = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left = mx + 'px';
            cursor.style.top = my + 'px';
            glow.style.left = mx + 'px';
            glow.style.top = my + 'px';
        });
        (function animateRing() {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
            requestAnimationFrame(animateRing);
        })();
        document.querySelectorAll('a, .bento-card, .skill-card, .exp-entry, button').forEach(el => {
            el.addEventListener('mouseenter', () => { cursor.style.width = '20px'; cursor.style.height = '20px'; ring.style.width = '56px'; ring.style.height = '56px'; });
            el.addEventListener('mouseleave', () => { cursor.style.width = '10px'; cursor.style.height = '10px'; ring.style.width = '36px'; ring.style.height = '36px'; });
        });

        // SCROLL REVEAL — threshold 0 so it fires as soon as any part is visible
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

        // NAV SCROLL STATE + ACTIVE LINK
        const navbar   = document.getElementById('navbar');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
            let current = '';
            sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
            navLinks.forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
        }, { passive: true });
        // Initial state
        navbar.classList.toggle('scrolled', window.scrollY > 40);

        // HAMBURGER / MOBILE MENU
        const hamburger = document.getElementById('navHamburger');
        const mobileMenu = document.getElementById('navMobile');
        const nmLinks = document.querySelectorAll('.nm-link');
        hamburger.addEventListener('click', () => {
            const open = hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        nmLinks.forEach(a => a.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }));

        // CONTACT FORM — EmailJS
        function submitForm() {
            const name = document.getElementById('fname').value.trim();
            const email = document.getElementById('femail').value.trim();
            const subject = document.getElementById('fsubject').value;
            const message = document.getElementById('fmessage').value.trim();

            // Validate
            let valid = true;
            [['fname', name], ['femail', email], ['fsubject', subject], ['fmessage', message]].forEach(([id, val]) => {
                const el = document.getElementById(id);
                if (!val) {
                    el.style.borderColor = 'rgba(255,80,80,0.7)';
                    valid = false;
                    setTimeout(() => el.style.borderColor = '', 2000);
                }
            });
            if (!valid) return;

            // Send button loading state
            const btn = document.querySelector('.btn-submit');
            btn.textContent = 'Sending...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_name: 'Arpit',
            }).then(() => {
                document.getElementById('formBody').style.display = 'none';
                document.getElementById('formSuccess').style.display = 'block';
            }).catch((err) => {
                btn.textContent = 'Send Message ↗';
                btn.disabled = false;
                btn.style.opacity = '1';
                alert('Oops! Something went wrong. Please try emailing directly at arpitshirbhate2@gmail.com');
                console.error('EmailJS error:', err);
            });
        }
