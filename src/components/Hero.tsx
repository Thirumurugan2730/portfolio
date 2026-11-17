import React from 'react';
import { ArrowDown, Download, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface HeroProps {
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCV }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-16">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center indigo glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/20 rounded-full blur-[140px] animate-pulse-slow" />
        
        {/* Bottom-right cyan/teal glow orb */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[130px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Subtle grid pattern mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-indigo-300 text-xs sm:text-sm font-medium tracking-wide mb-8 hover:border-indigo-400/40 transition-colors shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Computer Science & Engineering</span>
          <span className="w-1 h-1 rounded-full bg-indigo-400/60" />
          <span className="text-slate-400 font-mono text-xs">Portfolio 2026</span>
        </div>

        {/* Developer Greeting Moniker */}
        <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-3 tracking-wider">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Hello World, I am</span>
        </div>

        {/* Primary Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            {PORTFOLIO_CONFIG.name}
          </span>
        </h1>

        {/* Designation */}
        <p className="text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10 tracking-normal">
          <span className="text-indigo-300 font-semibold">Final Year B.E.</span>{' '}
          <span className="text-slate-200">Computer Science and Engineering Student</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Button 1: More About Me */}
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
          >
            <span>More About Me</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
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

        {/* Bottom Scroll Cue */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <button
            onClick={scrollToAbout}
            className="text-xs text-slate-400 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="tracking-widest uppercase text-[10px] font-mono">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-2.5 bg-indigo-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
