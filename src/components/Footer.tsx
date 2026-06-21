import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-zinc-900/60 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright info */}
        <div className="text-xs text-zinc-500 font-mono">
          © {new Date().getFullYear()} Arpit Shirbhate. All Rights Reserved.
        </div>

        {/* Live location */}
        <div className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Andhra Pradesh, India</span>
        </div>

        {/* Stack acknowledgement and Privacy link */}
        <div className="text-xs text-zinc-600 font-mono flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span>Engineered with Love ❤️</span>
          <span className="hidden sm:inline text-zinc-800">•</span>
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Scroll back to top */}
        <button 
          onClick={scrollToTop}
          className="w-11 h-11 flex items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/60 hover:bg-zinc-900 text-zinc-500 hover:text-emerald-400 transition-all"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
