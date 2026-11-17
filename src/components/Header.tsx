import React from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between backdrop-blur-md bg-slate-900/40 border border-slate-800/80 rounded-2xl px-5 py-3 shadow-lg shadow-black/20">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1 transition"
          aria-label="Back to top"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
            TS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-100 group-hover:text-indigo-400 transition-colors">
              {PORTFOLIO_CONFIG.name}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              CSE '25
            </span>
          </div>
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PORTFOLIO_CONFIG.statusBadge}</span>
          </div>

          <a
            href="#about"
            className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </header>
  );
};
