import React from 'react';
import { ArrowRight, Download, Code2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface HeroProps {
  onDownloadCV: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV, onReplayIntro }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden animate-fadeIn bg-[#070913]">
      {/* High-Vibrancy Animated Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left vibrant fuchsia/pink glow */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-transparent rounded-full blur-[140px] animate-pulse-slow" />
        
        {/* Bottom-right electric cyan/teal glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/20 to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
        
        {/* Center amber energy burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-900/15 via-pink-900/15 to-amber-900/10 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Vibrant Matrix/Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f715_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center py-12">
        {/* Colorful Pre-heading Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-mono tracking-wide mb-8 shadow-inner shadow-purple-500/20">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '5s' }} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 font-semibold">
            Computer Science & Engineering
          </span>
          <span className="text-cyan-400 font-bold">•</span>
          <span className="text-slate-300">Portfolio</span>
        </div>

        {/* Name - Ultra Vibrant Gradient Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight mb-6 leading-[1.05] drop-shadow-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-300 via-cyan-300 to-emerald-300">
            {PORTFOLIO_CONFIG.name}
          </span>
        </h1>

        {/* Designation - High Energy Styling */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed mb-12 tracking-normal">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-pink-400 font-bold">
            Final Year B.E.
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-100 to-purple-200 font-semibold">
            Computer Science and Engineering Student
          </span>
        </p>

        {/* Two Super Vibrant Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          {/* Button 1: More About Me (Navigates to Next Page) */}
          <button
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:brightness-110 text-white font-bold text-base shadow-[0_0_35px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          >
            <span>More About Me</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200 text-yellow-300" />
          </button>

          {/* Button 2: Download CV */}
          <button
            onClick={onDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-2xl bg-[#0d1224]/90 hover:bg-[#131b36] text-cyan-200 hover:text-white border-2 border-cyan-400/50 hover:border-cyan-300 font-bold text-base shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.45)] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer group backdrop-blur-md"
          >
            <Download className="w-5 h-5 text-cyan-300 group-hover:scale-125 transition-transform duration-200" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Replay C++ Simulator Trigger */}
        {onReplayIntro && (
          <div className="mt-16">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-purple-300 hover:text-pink-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400/60 shadow-md transition-all duration-200 cursor-pointer group"
              title="Re-run C++ compilation simulator"
            >
              <Code2 className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
              <span>🎮 Replay C++ Simulator</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
