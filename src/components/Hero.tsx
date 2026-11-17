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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070709] animate-hero-reveal">
      {/* Animatic Ambient Lighting Drift */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Luminous violet ambient aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[170px] animate-ambient-drift" />
        
        {/* Soft zinc accent light */}
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[150px] animate-ambient-drift" style={{ animationDelay: '3.5s' }} />
        
        {/* Micro radial grid pattern for spatial depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2.5rem_2.5rem] opacity-25" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center py-16">
        
        {/* Primary Name - Crisp, Sculptural Luxury Typography */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight mb-6 leading-[1.04] select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-100 to-zinc-400 drop-shadow-sm">
            {PORTFOLIO_CONFIG.name}
          </span>
        </h1>

        {/* Designation - Clean, Refined & Perfectly Balanced */}
        <p className="text-lg sm:text-2xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-12 tracking-normal">
          <span className="text-zinc-200 font-medium">Final Year B.E.</span>{' '}
          <span>Computer Science and Engineering Student</span>
        </p>

        {/* Two Neat, Cohesive & High-End Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: More About Me (Navigates to Next Page) */}
          <button
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-base shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:shadow-[0_0_45px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
          >
            <span>More About Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Button 2: Download CV */}
          <button
            onClick={onDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-medium text-base shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Minimal Replay Button */}
        {onReplayIntro && (
          <div className="mt-20">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-500 hover:text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 cursor-pointer"
              title="Re-run C++ typing animation"
            >
              <Code2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>Replay C++ Code</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
