import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Metrics', href: '#metrics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with interactive glowing state */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-display font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              ARPIT<span className="text-emerald-400 font-extrabold">.</span>SHIRBHATE
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 hover:border-emerald-500/30 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-all"
              title="Launch Developer CLI"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>Console</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-500 font-sans border border-zinc-700">`</kbd>
            </button>
            
            <a 
              href="#contact" 
              className="flex items-center gap-1 text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2 rounded-lg transition-all shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/25"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={onOpenTerminal}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-emerald-400"
            >
              <TerminalIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-[100%] left-0 right-0 glass-nav border-t border-zinc-900/80 p-6 flex flex-col gap-5 slide-in-bottom">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-zinc-800" />
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 py-3 rounded-xl transition-all shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>
    </>
  );
};
