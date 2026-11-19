import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface HeroProps {
  onDownloadCV: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV, onReplayIntro }) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Restrained Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft centered violet ambient spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        
        {/* Very subtle micro grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center z-10 flex flex-col items-center py-16">
        
        {/* Sub-badge: Status or Engineering discipline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          <span>Computer Science & Engineering</span>
        </div>

        {/* Primary Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-100 mb-5 select-none">
          {PORTFOLIO_CONFIG.name}
        </h1>

        {/* Designation */}
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10 tracking-normal">
          Final Year B.E.{' '}
          <span className="text-zinc-200">Computer Science and Engineering Student</span>
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Button 1: More About Me */}
          <button
            onClick={() => navigate('/about')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer group"
          >
            <span>More About Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200 text-zinc-800" />
          </button>

          {/* Button 2: Download CV */}
          <button
            onClick={onDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Discreet Replay Terminal Button */}
        {onReplayIntro && (
          <div className="mt-16">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/60 transition-all duration-200 cursor-pointer"
              title="Re-run terminal code introduction"
            >
              <Terminal className="w-3.5 h-3.5 text-zinc-500" />
              <span>Replay Intro</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
