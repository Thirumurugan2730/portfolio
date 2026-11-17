import React from 'react';
import { ArrowUp, Clock, Info } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const AboutPlaceholder: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-24 border-t border-slate-800/80 bg-slate-950/60">
      <div className="max-w-3xl mx-auto w-full text-center">
        {/* Placeholder Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span>Milestone 1 • Section Target</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          About Me
        </h2>

        {/* Placeholder card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 text-left mt-6 border border-slate-800 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-1">
                Placeholder Navigation Destination
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                This section serves as the functional smooth-scroll target for the <span className="text-indigo-300 font-medium">"More About Me"</span> button in Milestone 1. The comprehensive About Me section detailing {PORTFOLIO_CONFIG.name}'s background, academic path, and technical focus will be integrated in subsequent milestones.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/50">Status: Staged for Milestone 2</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/50">Target Anchor: #about</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-10">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium border border-slate-700/50 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to Top</span>
          </button>
        </div>
      </div>
    </section>
  );
};
