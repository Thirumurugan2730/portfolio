import React from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900/80 bg-slate-950 py-8 px-4 text-center text-xs text-slate-500 font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Personal Developer Portfolio</span>
          <span>•</span>
          <span>Milestone 1</span>
        </div>
      </div>
    </footer>
  );
};
