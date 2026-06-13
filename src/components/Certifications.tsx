import React from 'react';
import { Award, ChevronRight, Bookmark } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export const Certifications: React.FC = () => {
  const certs: Certification[] = [
    {
      title: 'AWS Certified Cloud Practitioner (Course Track)',
      issuer: 'Amazon Web Services (AWS)',
      date: 'April 2025',
      credentialId: 'AWS-CCP-10928X',
    },
    {
      title: 'Advanced Java Standard Edition Programming',
      issuer: 'Oracle Academy / Technical Course',
      date: 'December 2024',
      credentialId: 'JAVA-SE-209848',
    },
    {
      title: 'Machine Learning & Neural Networks Foundations',
      issuer: 'Kaggle / Standard Course Track',
      date: 'September 2024',
      credentialId: 'ML-KAG-90184A',
    },
    {
      title: 'Data Science & Scientific Python Core',
      issuer: 'DataCamp / Academy Stack',
      date: 'June 2024',
      credentialId: 'DSCI-PY-883921',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2 text-indigo-400 text-xs font-mono font-semibold tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>06 / ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            Professional Certifications
          </h2>
        </div>

        {/* Shelf List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.title}
              className="p-5 rounded-xl glass-card border border-zinc-900 bg-zinc-900/10 flex items-start gap-4 hover:border-emerald-500/20 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-900 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                <Bookmark className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                  {cert.title}
                </h3>
                <div className="text-sm font-semibold text-zinc-400 mt-1">
                  {cert.issuer}
                </div>
                <div className="flex items-center gap-3 mt-3 text-xs font-mono text-zinc-500">
                  <span>Issued: {cert.date}</span>
                  <span>•</span>
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 self-center transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
