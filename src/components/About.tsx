import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, User, Code2, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase">
            <User className="w-4 h-4" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Behind The Code
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Narrative & Description */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 leading-snug">
              Bridging scalable ML systems with modern web technologies.
            </h3>
            
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              I am a Computer Science student at VIT-AP focused on building NLP pipelines, efficient predictive models, and high-fidelity frontends. I design end-to-end data systems that translate complex analytical concepts into elegant, responsive user interfaces.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-emerald-500/20 transition-all group/card flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">4+ Stacks</span>
                  <Code2 className="w-5 h-5 text-emerald-500/40 group-hover/card:text-emerald-400 transition-colors" />
                </div>
                <p className="text-[10px] text-zinc-500 font-mono group-hover/card:text-zinc-400 transition-colors">Python, Java, DS, SQL</p>
              </div>
              
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-indigo-500/20 transition-all group/card flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-display">15+ Repos</span>
                  <Cpu className="w-5 h-5 text-indigo-500/40 group-hover/card:text-indigo-400 transition-colors" />
                </div>
                <p className="text-[10px] text-zinc-500 font-mono group-hover/card:text-zinc-400 transition-colors">ML, NLP & Web Cores</p>
              </div>
            </div>
          </div>

          {/* Column 2: Simulated Modern IDE / File Viewer */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              {/* IDE Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-900/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2">
                  <FileCode2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-[11px] font-mono text-zinc-400 font-medium">arpit.js</span>
                </div>
                <div className="w-12" /> {/* spacer */}
              </div>

              {/* IDE Content Screen */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-zinc-950/70 text-zinc-300 leading-relaxed overflow-x-auto select-none">
                <pre className="space-y-1 text-left">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-indigo-400">arpit</span>{' '}
                    <span className="text-zinc-400">=</span>{' '}
                    <span className="text-zinc-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">name</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-emerald-400">"Arpit Shirbhate"</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">role</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-emerald-400">"CSE Student"</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">university</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-emerald-400">"VIT AP"</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">skills</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-zinc-400">[</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-emerald-400">"Java"</span>
                    <span className="text-zinc-400">,</span>{' '}
                    <span className="text-emerald-400">"Python"</span>
                    <span className="text-zinc-400">,</span>{' '}
                    <span className="text-emerald-400">"DSA"</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-emerald-400">"Data Science"</span>
                    <span className="text-zinc-400">,</span>{' '}
                    <span className="text-emerald-400">"AI/ML"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">]</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">isPassionate</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-amber-500">true</span>
                    <span className="text-zinc-400">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-sky-400">status</span>
                    <span className="text-zinc-400">:</span>{' '}
                    <span className="text-emerald-400">"Open to opportunities"</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">{'}'}</span>
                  </div>
                  <div className="h-4" />
                  <div className="text-zinc-500 font-medium">
                    // Currently focused on:
                  </div>
                  <div className="text-zinc-500 font-medium">
                    // Data Science & ML 📊
                  </div>
                </pre>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
