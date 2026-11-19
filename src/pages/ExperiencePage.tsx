import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Background Lighting Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      <PageHeader currentSection="Experience" />

      <main className="relative max-w-4xl mx-auto w-full z-10 py-10 sm:py-14 my-auto text-left">
        {/* Page Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4">
            <Briefcase className="w-3.5 h-3.5 text-violet-400" />
            <span>Career & Academic Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Experience & Timeline
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Chronological overview of verified undergraduate computer science education, systems research prototyping, and career readiness.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {PORTFOLIO_CONFIG.experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  item.isCurrent
                    ? 'bg-violet-600 border-[#08080a] shadow-[0_0_10px_rgba(139,92,246,0.6)]'
                    : 'bg-zinc-800 border-zinc-700'
                }`}
              />

              {/* Timeline Card */}
              <div className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 border border-zinc-800/90 relative overflow-hidden transition-all duration-300">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-violet-400 px-2 py-0.5 rounded bg-violet-950/40 border border-violet-900/40">
                      {item.type}
                    </span>
                    {item.isCurrent && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Active</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role & Org */}
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-1">
                  {item.role}
                </h2>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-4 font-medium">
                  <span>{item.organization}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-zinc-400">
                  {item.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-600 mt-1 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/70">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 pb-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>Experience & Education Timeline</span>
      </footer>
    </div>
  );
};
