import React, { useState } from 'react';
import { Mail, Download, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS keys are not configured. Simulating transmission.');
      setTimeout(() => {
        setIsSending(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_name: 'Arpit Shirbhate',
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('EmailJS Success:', response.status, response.text);
        setIsSending(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setIsSending(false);
        setError('Failed to transmit message. Please try again or email directly.');
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col mb-16 items-center text-center">
          <div className="flex items-center gap-2 mb-2 text-primary text-xs font-mono font-semibold tracking-widest uppercase">
            <Mail className="w-4 h-4" />
            <span>07 / CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Initiate Contact
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            Interested in hiring an intern or collaborating on a data systems project? Drop a line below.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Column 1: Info and Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display text-white">
                Let's build something exceptional.
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                I am actively seeking internship opportunities, research collaborations, and open-source platform contributions. I am always open to discussing new platform designs, machine learning systems, or custom software applications.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:arpitshirbhate4@gmail.com"
                  className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono">arpitshirbhate4@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Grid and CV download button */}
            <div className="space-y-6 mt-12 lg:mt-0">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/arpit2006"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/arpit-shirbhate"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-secondary hover:border-zinc-700 transition-all"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>

              {/* PDF CV/Resume download button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-primary-dark/20 bg-primary-dark/5 hover:bg-primary-dark/10 text-primary text-sm font-semibold transition-all w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Professional Resume</span>
              </a>
            </div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-zinc-900 shadow-2xl relative overflow-hidden">

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-primary animate-bounce" />
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">Transmission Successful</h3>
                  <p className="text-zinc-400 text-sm max-w-xs">
                    Thank you! Your message was received successfully. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-mono font-bold text-zinc-400 uppercase">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-primary/50 transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-mono font-bold text-zinc-400 uppercase">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-primary/50 transition-all"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-mono font-bold text-zinc-400 uppercase">Message</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      className="w-full bg-zinc-950/60 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 outline-none focus:border-primary/50 transition-all resize-none"
                      placeholder="Hi Arpit, I would love to talk about an internship role..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-red-500/25 bg-red-500/5 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-zinc-950 text-sm font-bold transition-all shadow-lg hover:shadow-primary/20"
                  >
                    {isSending ? (
                      <>
                        <span>Transmitting...</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
