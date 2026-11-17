import React from 'react';
import { ArrowLeft, Clock, Info, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface AboutPageProps {
  onDownloadCV: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onDownloadCV }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-[#070709] animate-hero-reveal">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/12 rounded-full blur-[170px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2.5rem_2.5rem] opacity-25" />
      </div>

      <div className="relative max-w-3xl mx-auto w-full z-10 my-auto">
        {/* Navigation Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-sm font-medium transition-all duration-200 cursor-pointer shadow-md group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200 text-zinc-400" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-mono uppercase tracking-wider mb-6">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>Milestone 1 • Placeholder Page</span>
        </div>

        {/* Section Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
          About Me
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 mb-8 font-normal">
          {PORTFOLIO_CONFIG.name} — <span className="text-zinc-200 font-medium">{PORTFOLIO_CONFIG.designation}</span>
        </p>

        {/* Placeholder Card */}
        <div className="glass-panel-luxury rounded-2xl p-6 sm:p-8 text-left border border-zinc-800/90 relative overflow-hidden shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/60 text-zinc-300 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-zinc-100 mb-2">
                About Me Section Staged for Next Milestone
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                This page represents the dedicated navigation target for the <span className="text-zinc-200 font-medium">"More About Me"</span> button. In accordance with Milestone 1 scope restrictions, detailed background, education, technical journey, and experience will be fully expanded here in subsequent milestones.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-sm font-semibold transition cursor-pointer shadow-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>

                <button
                  onClick={onDownloadCV}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-sm font-medium transition cursor-pointer"
                >
                  <Download className="w-4 h-4 text-zinc-400" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs text-zinc-600 font-mono mt-12">
        © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name} • Milestone 1
      </footer>
    </div>
  );
};
