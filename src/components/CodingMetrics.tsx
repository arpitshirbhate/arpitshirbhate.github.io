import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, GitBranch, ExternalLink, FolderGit2, Flame, Code2, GitCommit } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const CodingMetrics: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/arpit2006')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.public_repos === 'number') {
          setRepoCount(data.public_repos);
        }
      })
      .catch((err) => console.error('Error fetching GitHub profile:', err));
  }, []);

  return (
    <section id="metrics" className="py-24 relative bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 text-center items-center">
          <div className="flex items-center gap-2 mb-2 text-primary text-xs font-mono font-semibold tracking-widest uppercase">
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

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Card 1: Total Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/20 hover:border-primary-dark/10 hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Total Repositories</span>
              <FolderGit2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white font-display">
                {repoCount !== null ? repoCount : '25+'}
              </span>
              <p className="text-[9px] text-zinc-500 font-mono mt-1">Fetched live via GitHub API</p>
            </div>
          </motion.div>

          {/* Card 2: Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/20 hover:border-primary-dark/10 hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Contributions</span>
              <GitCommit className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white font-display">
                680+
              </span>
              <p className="text-[9px] text-zinc-500 font-mono mt-1">Commits, PRs & reviews</p>
            </div>
          </motion.div>

          {/* Card 3: Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/20 hover:border-primary-dark/10 hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Commit Streak</span>
              <Flame className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="text-3xl font-extrabold text-white font-display flex items-baseline gap-1">
                18 <span className="text-xs text-zinc-500 font-mono font-normal">days</span>
              </span>
              <p className="text-[9px] text-zinc-500 font-mono mt-1">Max streak: 38 days</p>
            </div>
          </motion.div>

          {/* Card 4: Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-5 rounded-2xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/20 hover:border-primary-dark/10 hover:shadow-primary/5 transition-all duration-300 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Core Languages</span>
              <Code2 className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono mb-1">
                  <span className="text-zinc-400">Python</span>
                  <span className="text-zinc-500">45%</span>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded overflow-hidden">
                  <div className="bg-primary h-full rounded" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center text-[9px] font-mono mb-1">
                  <span className="text-zinc-400">Java / TS</span>
                  <span className="text-zinc-500">35%</span>
                </div>
                <div className="w-full bg-zinc-950 h-1 rounded overflow-hidden">
                  <div className="bg-secondary h-full rounded" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Contribution Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl glass-card border border-zinc-900 bg-zinc-900/10 hover:border-primary-dark/10 hover:shadow-primary/5 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-primary">
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
              className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-primary bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg transition-all"
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
                width="800"
                height="115"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 text-[10px] sm:text-xs font-mono text-zinc-600">
            <span>Less Active</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950/60 border border-zinc-900/40">
              <span className="w-2.5 h-2.5 rounded bg-zinc-900 border border-zinc-800" />
              <span className="w-2.5 h-2.5 rounded bg-primary-dark/20 border border-primary-dark/10" />
              <span className="w-2.5 h-2.5 rounded bg-primary-dark/60" />
              <span className="w-2.5 h-2.5 rounded bg-primary-dark/80" />
              <span className="w-2.5 h-2.5 rounded bg-primary" />
            </div>
            <span>More Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
