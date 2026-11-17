import React from 'react';
import { ArrowRight, Download, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface HeroProps {
  onDownloadCV: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV, onReplayIntro }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden animate-fadeIn">
      {/* Subtle Background Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center py-12">
        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {PORTFOLIO_CONFIG.name}
          </span>
        </h1>

        {/* Designation */}
        <p className="text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-12 tracking-normal">
          <span className="text-indigo-300 font-semibold">Final Year B.E.</span>{' '}
          <span className="text-slate-200">Computer Science and Engineering Student</span>
        </p>

        {/* Two Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: More About Me (Navigates to Next Page) */}
          <button
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          >
            <span>More About Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Button 2: Download CV */}
          <button
            onClick={onDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-base shadow-md shadow-black/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group backdrop-blur-sm"
          >
            <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Subtle Replay C++ Intro Trigger */}
        {onReplayIntro && (
          <div className="mt-14 opacity-50 hover:opacity-100 transition-opacity">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition cursor-pointer"
              title="Re-run C++ compilation intro"
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Replay C++ Code</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
