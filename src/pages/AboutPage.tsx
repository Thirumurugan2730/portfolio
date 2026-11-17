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
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-[#0b0f19]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/12 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative max-w-3xl mx-auto w-full z-10 my-auto">
        {/* Navigation Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-sm font-medium transition-all duration-200 cursor-pointer shadow-md group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200 text-indigo-400" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono uppercase tracking-wider mb-6">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span>Milestone 1 • Placeholder Page</span>
        </div>

        {/* Section Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
          About Me
        </h1>

        <p className="text-base sm:text-lg text-slate-300 mb-8 font-normal">
          {PORTFOLIO_CONFIG.name} — <span className="text-indigo-300">{PORTFOLIO_CONFIG.designation}</span>
        </p>

        {/* Placeholder Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 text-left border border-slate-800/90 relative overflow-hidden shadow-2xl shadow-black/40">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-100 mb-2">
                About Me Section Staged for Next Milestone
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                This page represents the dedicated navigation target for the <span className="text-indigo-300 font-medium">"More About Me"</span> button. In accordance with Milestone 1 scope restrictions, detailed background, education, technical journey, and experience will be fully expanded here in subsequent milestones.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition cursor-pointer shadow-md shadow-indigo-600/30"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>

                <button
                  onClick={onDownloadCV}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-sm font-medium transition cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs text-slate-500 font-mono mt-12">
        © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name} • Milestone 1
      </footer>
    </div>
  );
};
