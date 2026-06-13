import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitBranch, ExternalLink } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const CodingMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-24 relative bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 text-center items-center">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase">
            <Trophy className="w-4 h-4" />
            <span>05 / ANALYTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Performance Metrics
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            Direct output indicators from continuous skill evaluation, platform commits, and competitive coding practice.
          </p>
        </div>

        {/* Live Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl glass-card border border-zinc-900 bg-zinc-900/10 hover:border-emerald-500/10 hover:shadow-emerald-500/5 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                <GitBranch className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  GitHub Contribution Activity
                </h3>
                <p className="text-zinc-500 text-xs font-mono mt-0.5">
                  Live data tracking from @arpit2006
                </p>
              </div>
            </div>
            
            <a
              href="https://github.com/arpit2006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-emerald-400 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Calendar Image Frame */}
          <div className="bg-zinc-950/80 border border-zinc-900 rounded-xl p-4 sm:p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            <div className="min-w-[800px] sm:min-w-0">
              <img
                src="https://ghchart.rshah.org/10b981/arpit2006"
                alt="Arpit Shirbhate's Live GitHub Contributions Calendar"
                className="w-full h-auto object-contain select-none transition-all hover:scale-[1.01] duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 text-[10px] sm:text-xs font-mono text-zinc-600">
            <span>Less Active</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950/60 border border-zinc-900/40">
              <span className="w-2.5 h-2.5 rounded bg-zinc-900 border border-zinc-800" />
              <span className="w-2.5 h-2.5 rounded bg-emerald-950/40 border border-emerald-900/10" />
              <span className="w-2.5 h-2.5 rounded bg-emerald-800/60" />
              <span className="w-2.5 h-2.5 rounded bg-emerald-600/80" />
              <span className="w-2.5 h-2.5 rounded bg-emerald-400" />
            </div>
            <span>More Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
