import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
      {/* Sleek linear grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      {/* Radial glows representing platform engineering and ML */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full glow-spotlight-emerald opacity-60 animate-glow-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full glow-spotlight-indigo opacity-50 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Elegant central mask for pure premium dark layout focus */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950" />
    </div>
  );
};
