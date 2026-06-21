import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, GitPullRequest, GraduationCap } from "lucide-react";

export const Timeline = () => {
  const items = [
    {
      year: "May 2026 - Present",
      role: "Contributor",
      company: "Girlscript Summer of Code",
      icon: <GitPullRequest className="w-4 h-4" />,
      description:
        "Contributed to community open-source initiatives. Optimized code paths, resolved issues in active public repositories, and collaborated on version control standards.",
      tags: ["Open Source", "Contribution", "Git & GitHub"],
      color: "purple",
    },
    {
      year: "Aug 2025 - Present",
      role: "Core Member",
      company: "Microsoft Student Chapter VIT-AP",
      icon: <Users className="w-4 h-4" />,
      description:
        "Co-organized university hackathons and workshops. Developed community materials and collaborated with student peers to build coding competencies.",
      tags: ["Technical Events", "Public Speaking", "Community Lead"],
      color: "indigo",
    },
    {
      year: "2024 - Present",
      role: "B.Tech CSE Engineering",
      company: "Vellore Institute of Technology, Andhra Pradesh",
      icon: <GraduationCap className="w-4 h-4" />,
      description:
        "Pursuing a B.Tech in Computer Science and Engineering with a strong focus on Data Structures & Algorithms, Object-Oriented Programming, Data Science, and Software Development. Consistently maintaining good academic performance while actively contributing to open-source projects and building real-world applications.",
      tags: ["DSA", "OOPs Theory", "Verilog", "Discrete Math"],
      color: "emerald",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "purple":
        return {
          dot: "group-hover:border-purple-400 group-hover:shadow-purple-500/30 text-purple-400 border-purple-500/20 bg-purple-950/10",
          card: "hover:border-purple-500/20 hover:shadow-purple-500/5",
          tag: "group-hover:text-purple-400 group-hover:border-purple-500/10",
          text: "text-purple-400",
        };
      case "indigo":
        return {
          dot: "group-hover:border-indigo-400 group-hover:shadow-indigo-500/30 text-indigo-400 border-indigo-500/20 bg-indigo-950/10",
          card: "hover:border-indigo-500/20 hover:shadow-indigo-500/5",
          tag: "group-hover:text-indigo-400 group-hover:border-indigo-500/10",
          text: "text-indigo-400",
        };
      case "teal":
        return {
          dot: "group-hover:border-teal-400 group-hover:shadow-teal-500/30 text-teal-400 border-teal-500/20 bg-teal-950/10",
          card: "hover:border-teal-500/20 hover:shadow-teal-500/5",
          tag: "group-hover:text-teal-400 group-hover:border-teal-500/10",
          text: "text-teal-400",
        };
      default: // emerald (mapped to primary)
        return {
          dot: "group-hover:border-primary group-hover:shadow-primary/30 text-primary border-primary-dark/20 bg-primary-dark/10",
          card: "hover:border-primary-dark/20 hover:shadow-primary/5",
          tag: "group-hover:text-primary group-hover:border-primary-dark/10",
          text: "text-primary",
        };
    }
  };

  return (
    <section id="timeline" className="py-24 relative bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-center items-center">
          <div className="flex items-center gap-2 mb-2 text-primary text-xs font-mono font-semibold tracking-widest uppercase">
            <Calendar className="w-4 h-4" />
            <span>03 / MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Professional Journey
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
            A chronological timeline of my academic progress, technical chapter
            involvement, and open-source contributions.
          </p>
        </div>

        {/* Timeline Thread */}
        <div className="relative ml-8 md:ml-36 pl-8 md:pl-16 space-y-12">
          {/* Vertical Gradient Line */}
          <div className="absolute left-[9px] md:left-[17px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-emerald-500 opacity-30" />

          {items.map((item, idx) => {
            const classes = getColorClasses(item.color);
            return (
              <motion.div
                key={item.role + idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Year badge shown on left (for desktop) */}
                <div className="absolute hidden md:block left-[-220px] top-1 text-right w-40">
                  <span
                    className={`text-xs font-mono font-semibold ${classes.text} tracking-wider whitespace-nowrap`}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Timeline dot with glowing effect */}
                <div
                  className={`absolute left-[-35px] md:left-[-59px] top-1 w-6 h-6 rounded-full border bg-zinc-950 flex items-center justify-center transition-all duration-300 ${classes.dot}`}
                >
                  {item.icon}
                </div>

                {/* Card Contents */}
                <div
                  className={`glass-card p-6 rounded-xl border border-zinc-900 shadow-md transition-all duration-300 hover:-translate-y-1 ${classes.card}`}
                >
                  {/* Year tag for mobile */}
                  <div
                    className={`block md:hidden mb-2 text-xs font-mono font-bold ${classes.text}`}
                  >
                    {item.year}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {item.role}
                  </h3>

                  <div className="text-sm font-semibold text-zinc-400 mt-1">
                    {item.company}
                  </div>

                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech tags used in role */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono font-semibold tracking-wider text-zinc-500 bg-zinc-950/40 px-2.5 py-1 rounded-md border border-zinc-900 transition-all ${classes.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
