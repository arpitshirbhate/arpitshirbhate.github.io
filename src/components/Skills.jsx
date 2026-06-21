import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Code2,
  Cpu,
  CheckCircle,
  Globe,
  Terminal,
} from "lucide-react";

export const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      accent:
        "border-primary-dark/20 hover:border-primary-dark/40 hover:shadow-primary/5",
      skills: ["Python", "Java", "C++", "JavaScript"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 text-secondary" />,
      accent:
        "border-secondary-dark/20 hover:border-secondary-dark/40 hover:shadow-secondary/5",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
      ],
    },
    {
      title: "Data Science & ML",
      icon: <Database className="w-5 h-5 text-teal-400" />,
      accent:
        "border-teal-500/20 hover:border-teal-500/40 hover:shadow-teal-500/5",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "TensorFlow",
        "Keras",
        "Matplotlib",
        "TF-IDF",
        "NLP Pipelines",
        "Text Classification",
        "Recommendation Systems",
      ],
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      accent:
        "border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/5",
      skills: [
        "Git",
        "GitHub",
        "Linux",
        "VS Code",
        "Vercel",
        "Anaconda",
        "IntelliJ",
        "PyCharm",
        "Jupyter Notebook",
        "Kaggle",
        "Streamlit",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2 text-secondary text-xs font-mono font-semibold tracking-widest uppercase">
            <Cpu className="w-4 h-4" />
            <span>02 / COMPETENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Technology Stack
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            A comprehensive overview of libraries, languages, and frameworks
            that I work with to architect analytical tools and reliable
            applications.
          </p>
        </div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-zinc-900/40 border glass-card transition-all duration-300 ${cat.accent}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  {cat.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="grid grid-cols-2 gap-y-3.5 gap-x-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-primary/80 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
