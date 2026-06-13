import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Network, ArrowRight } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  github: string;
  live: string;
  architecture: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [activeArch, setActiveArch] = useState<number | null>(null);

  const projectsList: Project[] = [
    {
      title: 'Prompt Craft',
      description: 'A multi-LLM prompt optimization tool that automatically analyzes and enhances user prompts to improve response quality.',
      longDescription: 'Built with Next.js 15, Gemini, Groq, OpenAI, and Ollama. Includes prompt versioning, side-by-side diff visualization, templates, analytics, and OAuth login.',
      tags: ['TypeScript', 'Next.js', 'Supabase', 'Gemini API', 'OpenAI', 'OAuth'],
      github: 'https://github.com/arpit2006/Prompt-Enhancer',
      live: 'https://promptcraftt.vercel.app/',
      architecture: (
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center gap-4 text-xs font-mono font-semibold">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">SYSTEM FLOW DIAGRAM</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-zinc-300 w-full justify-around text-center">
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">User Prompt</div>
            <ArrowRight className="w-4 h-4 text-emerald-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-emerald-500/25 bg-emerald-500/5 w-32 text-emerald-400">Multi-LLM Optimizer</div>
            <ArrowRight className="w-4 h-4 text-emerald-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">Enhanced Output</div>
          </div>
        </div>
      )
    },
    {
      title: 'GitHub Developer Popularity Tier Predictor',
      description: 'Predicting Developer Popularity Levels Using GitHub Activity Metrics and Machine Learning.',
      longDescription: 'Features real-time GitHub REST API integration to fetch profile details, compute a custom weighted Impact Score, pre-process data with Scikit-Learn pipelines, and classify profiles into Beginner, Advanced, or Elite tiers using an XGBoost model deployed via Streamlit.',
      tags: ['Python', 'Machine Learning', 'XGBoost', 'Scikit-learn', 'Streamlit', 'GitHub API', 'Plotly'],
      github: 'https://github.com/arpit2006/GitHub-Developer-Popularity-Tier-Predictor',
      live: '#',
      architecture: (
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center gap-4 text-xs font-mono font-semibold">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">ML PREDICTION PIPELINE</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-zinc-300 w-full justify-around text-center">
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">GitHub API Query</div>
            <ArrowRight className="w-4 h-4 text-amber-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-amber-500/25 bg-amber-500/5 w-32 text-amber-400">XGBoost Classifier</div>
            <ArrowRight className="w-4 h-4 text-amber-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">Streamlit UI Dashboard</div>
          </div>
        </div>
      )
    },
    {
      title: 'Customer Churn Prediction Model',
      description: 'An end-to-end Machine Learning project that predicts whether a telecom customer is likely to churn using customer demographics, account information, and service usage patterns.',
      longDescription: 'Features exploratory data analysis (EDA), handling class imbalance with SMOTE, feature scaling/encoding pipelines, and training classification models (Logistic Regression, Random Forest, XGBoost) optimized using ROC-AUC and F1-score.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'XGBoost', 'Imbalanced Data'],
      github: 'https://github.com/arpit2006/Customer-Churn-Prediction-Model',
      live: '#',
      architecture: (
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center gap-4 text-xs font-mono font-semibold">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">ML CLASSIFICATION PIPELINE</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-zinc-300 w-full justify-around text-center">
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">Demographics & Usage</div>
            <ArrowRight className="w-4 h-4 text-indigo-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-indigo-500/25 bg-indigo-500/5 w-32 text-indigo-400">Preprocessing & SMOTE</div>
            <ArrowRight className="w-4 h-4 text-indigo-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">ROC-AUC & F1 Evaluation</div>
          </div>
        </div>
      )
    },
    {
      title: 'IoT Fire-Fighting Robot',
      description: 'An IoT-enabled robot that detects and extinguishes fires automatically using sensors, motors, and pumps with remote monitoring capability.',
      longDescription: 'Integrated fire sensors, motor drivers, and water pumps with Arduino. Supports remote telemetric monitoring and override controls.',
      tags: ['Arduino', 'C/C++', 'IoT', 'Sensors & Actuators', 'Embedded Systems'],
      github: 'https://github.com/arpit2006/IoT-Based-Fire-Fighting-Robot',
      live: '#',
      architecture: (
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col items-center justify-center gap-4 text-xs font-mono font-semibold">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">HARDWARE SIGNAL FLOW</span>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-zinc-300 w-full justify-around text-center">
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">Sensor Detection</div>
            <ArrowRight className="w-4 h-4 text-teal-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-teal-500/25 bg-teal-500/5 w-32 text-teal-400">Microcontroller (Arduino)</div>
            <ArrowRight className="w-4 h-4 text-teal-400 rotate-90 sm:rotate-0" />
            <div className="px-3 py-2 rounded border border-zinc-800 bg-zinc-900 w-28">Water Pump & Actuators</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2 text-teal-400 text-xs font-mono font-semibold tracking-widest uppercase">
            <FolderGit2 className="w-4 h-4" />
            <span>04 / PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Engineering Projects
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            A curated showcase of applications built with computational scalability, elegant visualization pipelines, and clean architectures.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-zinc-900 flex flex-col justify-between h-full group"
            >
              <div>
                {/* Visual Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <FolderGit2 className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.github} 
                      className="p-2 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.live !== '#' && (
                      <a 
                        href={project.live} 
                        className="p-2 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-emerald-400 transition-colors"
                        title="View Live Site"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Text */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tag shelves */}
                <div className="flex flex-wrap gap-2 mt-4 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 bg-zinc-950/40 px-2 py-0.5 rounded border border-zinc-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advanced System Architecture toggle */}
              <div className="mt-4 border-t border-zinc-900/60 pt-4">
                <button
                  onClick={() => setActiveArch(activeArch === idx ? null : idx)}
                  className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>{activeArch === idx ? 'Close Architecture' : 'View System Architecture'}</span>
                </button>

                <AnimatePresence>
                  {activeArch === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 overflow-hidden"
                    >
                      {project.architecture}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
