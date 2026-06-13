import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, ArrowUpRight } from 'lucide-react';
import Hyperspeed from './Hyperspeed';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 22 },
    },
  };

  // Portfolio HSL Brand Palette (Emerald & Deep Indigo)
  const hyperspeedOptions = useMemo(() => ({
    onSpeedUp: () => {},
    onSlowDown: () => {},
    distortion: 'turbulentDistortion' as const,
    length: 400,
    roadWidth: 9,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 120,
    speedUp: 3.5,
    carLightsFade: 0.4,
    totalSideLightSticks: 24,
    lightPairsPerRoadWay: 30,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.1, 0.4] as [number, number],
    lightStickHeight: [1.2, 1.6] as [number, number],
    movingAwaySpeed: [70, 90] as [number, number],
    movingCloserSpeed: [-110, -150] as [number, number],
    carLightsLength: [400 * 0.04, 400 * 0.15] as [number, number],
    carLightsRadius: [0.04, 0.12] as [number, number],
    carWidthPercentage: [0.25, 0.45] as [number, number],
    carShiftX: [-0.7, 0.7] as [number, number],
    carFloorSeparation: [0, 4] as [number, number],
    colors: {
      roadColor: 0x050505,
      islandColor: 0x080808,
      background: 0x09090b,
      shoulderLines: 0x10b981, // Emerald green guide rails
      brokenLines: 0x10b981,   // Emerald green guide rails
      leftCars: [0x10b981, 0x059669, 0x34d399], // Emerald green headlights going away
      rightCars: [0x6366f1, 0x4f46e5, 0x818cf8], // Deep Indigo taillights coming closer
      sticks: 0x10b981 // Glowing emerald side pillars
    }
  }), []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-zinc-950">
      
      {/* Immersive Cyberpunk Hyperspeed dynamic corridor */}
      <div className="absolute inset-0 z-0 opacity-40 select-none pointer-events-none">
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Radial overlay gradient to merge canvas edges smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/70 to-zinc-950 pointer-events-none z-[1]" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left max-w-3xl"
        >
          {/* Subtle status pulse indicator */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 mb-6 bg-zinc-900/60 border border-zinc-800 px-3.5 py-1.5 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono tracking-widest font-bold text-zinc-400 uppercase">
              Available for Internships
            </span>
          </motion.div>
 
          {/* Minimalist Professional Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-6"
          >
            I build systems that{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              scale and visualize
            </span>{' '}
            complex data.
          </motion.h1>
 
          {/* Concise Professional Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Computer Science student at Vellore Institute of Technology. Focused on{' '}
            <span className="text-zinc-200 font-medium">scalable ML systems</span>,{' '}
            <span className="text-zinc-200 font-medium">NLP applications</span>,{' '}
            and <span className="text-zinc-200 font-medium">modern web technologies</span>.
          </motion.p>
 
          {/* Minimal Clean Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 z-20"
          >
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 hover:border-emerald-500/20 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-all backdrop-blur"
            >
              <TerminalIcon className="w-4 h-4" />
              <span>Launch Terminal</span>
              <kbd className="hidden sm:inline px-1 py-0.5 rounded bg-zinc-950 text-[9px] text-zinc-500 font-sans border border-zinc-800 ml-1">`</kbd>
            </button>
             
            <a
              href="#projects"
              className="flex items-center gap-1 px-5 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-xs font-bold text-zinc-950 transition-all shadow shadow-emerald-400/5 hover:shadow-emerald-400/15"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
