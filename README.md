<div align="center">

# Arpit Shirbhate — Portfolio

**A modern, responsive personal portfolio built with pure HTML, CSS, and JavaScript.**

[![License: MIT](https://img.shields.io/badge/License-MIT-818cf8.svg)](LICENSE)
![Built with HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Styled with CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</div>

---

## About

Personal portfolio for **Arpit Shirbhate**, a B.Tech Computer Science sophomore at VIT Andhra Pradesh.  
Built from scratch — no frameworks, no build tools, no dependencies beyond a single font import and EmailJS.

**Live sections:** Hero · About · Experience · Projects · Skills · Contact

---

## Screenshots


---

## Features

| Feature | Detail |
|---|---|
| **Custom cursor** | Dot + ring + radial glow that tracks mouse movement |
| **Scroll-reveal** | Elements animate in as they enter the viewport |
| **Animated hero** | Floating heading, gradient text, scanning scroll line |
| **Marquee ticker** | Infinite scrolling tech stack strip |
| **Dark glassmorphism** | Deep space theme with indigo–violet–pink gradient system |
| **Contact form** | Validated form powered by EmailJS, with success state |
| **Fully responsive** | 5 breakpoints: 1200 / 900 / 600 / 480px + touch media query |
| **SEO-ready** | Meta description, Open Graph, Twitter Card, JSON-LD Person schema |
| **Accessible** | Semantic HTML, aria-labels, keyboard-navigable mobile menu |

---

## Tech Stack

- **HTML5** — semantic structure, JSON-LD structured data
- **CSS3** — custom properties, CSS Grid, clamp(), keyframe animations
- **Vanilla JavaScript** — scroll effects, cursor, mobile nav, form logic
- **[EmailJS](https://www.emailjs.com/)** — serverless contact form delivery
- **Google Fonts** — Plus Jakarta Sans + Space Mono

---

## Project Structure

```
Portfolio/
├── assets/
│   ├── Image11.png       # Profile photo (About section + OG image)
│   ├── Logo.png          # Favicon
│   ├── img.avif          # Additional asset
│   └── image.png         # Additional asset
├── index.html            # Full single-page markup
├── styles.css            # All styling, tokens, animations, responsive rules
├── script.js             # Cursor, scroll-reveal, nav, EmailJS form
├── LICENSE               # MIT License
└── README.md
```

---

## Getting Started

No build step, no install required.

```bash
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
```

Then open `index.html` in any browser — or use VS Code Live Server:

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.

1. Create a free account at emailjs.com
2. Add an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** — map template variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — selected subject
   - `{{message}}` — message body
4. Open `script.js` and replace the three constants at the top:

```js
const PUBLIC_KEY    = 'YOUR_PUBLIC_KEY';
const SERVICE_ID    = 'YOUR_SERVICE_ID';
const TEMPLATE_ID   = 'YOUR_TEMPLATE_ID';
```

> **Note:** EmailJS public keys are browser-visible. For production use, consider adding server-side rate limiting or a backend proxy.

---

## Customization

| File | What to change |
|---|---|
| `index.html` | Name, bio, job titles, project details, links |
| `styles.css` | `:root` tokens — accent colour, fonts, spacing, radius |
| `script.js` | EmailJS credentials |
| `assets/` | Replace `Image11.png` with your own photo, `Logo.png` with your favicon |

### Changing the colour scheme

All colours are CSS custom properties in `:root` at the top of `styles.css`:

```css
--accent:   #818cf8;   /* indigo */
--accent2:  #a78bfa;   /* violet */
--pink:     #f472b6;   /* pink   */
--gradient: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%);
```

---

## Deployment

This is a fully static site — deploy anywhere for free:

| Platform | How |
|---|---|
| **GitHub Pages** | Push to `main`, enable Pages in repo Settings |
| **Netlify** | Drag-and-drop the folder at netlify.com/drop |
| **Vercel** | `vercel` CLI or import from GitHub |
| **Firebase Hosting** | `firebase deploy` |

---

## License

This project is licensed under the [MIT License](LICENSE).  
© 2026 Arpit Shirbhate

## Attribution Requirement
If you use, copy, or modify this project, you must give proper credit to:
- **Arpit Shirbhate**

Suggested credit line:
> Original project by Arpit Shirbhate.

## License
This project is open source. You can add an MIT License file if you plan to share it publicly.
