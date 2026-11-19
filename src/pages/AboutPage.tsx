import React from 'react';
import { ArrowLeft, GraduationCap, Code2, Layers, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface AboutPageProps {
  onDownloadCV: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onDownloadCV }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Restrained Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-10 max-w-4xl mx-auto w-full flex items-center justify-between pb-8 border-b border-zinc-800/60">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-all duration-200 cursor-pointer group"
          aria-label="Back to Homepage"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200 text-zinc-400" />
          <span>Home</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span>{PORTFOLIO_CONFIG.name}</span>
          <span>/</span>
          <span className="text-zinc-300">About</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative max-w-4xl mx-auto w-full z-10 my-auto py-12">
        {/* Section Heading & Subtitle */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-violet-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            <span>Profile Overview</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I am a <span className="text-zinc-200 font-medium">{PORTFOLIO_CONFIG.designation}</span> passionate about designing resilient software, clean architectures, and performant digital experiences.
          </p>
        </div>

        {/* Structured Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Card 1: Academic Background */}
          <div className="glass-surface glass-surface-hover rounded-xl p-6 text-left">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/70 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-4">
              <GraduationCap className="w-4 h-4 text-violet-400" />
            </div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1.5">
              Academic Foundation
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Undergraduate studies focused on core Computer Science disciplines, algorithms, data structures, operating systems, and computer networks.
            </p>
          </div>

          {/* Card 2: Engineering Philosophy */}
          <div className="glass-surface glass-surface-hover rounded-xl p-6 text-left">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/70 border border-zinc-700/60 flex items-center justify-center text-zinc-300 mb-4">
              <Code2 className="w-4 h-4 text-violet-400" />
            </div>
            <h2 className="text-base font-semibold text-zinc-100 mb-1.5">
              Engineering Mindset
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Committed to writing readable, maintainable code with high attention to performance, modern design patterns, and product quality.
            </p>
          </div>
        </div>

        {/* Card 3: Milestone Staging Banner */}
        <div className="glass-surface rounded-xl p-6 text-left border border-zinc-800">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-zinc-800/70 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5">
              <Layers className="w-4 h-4 text-zinc-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-zinc-200">
                  Detailed Journey & Projects
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                  Staged for Milestone 2
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                Comprehensive project case studies, technical skills inventory, and internship experience will be deployed in the subsequent portfolio update.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Home</span>
                </button>

                <button
                  onClick={onDownloadCV}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="relative z-10 max-w-4xl mx-auto w-full pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>Developer Portfolio</span>
      </footer>
    </div>
  );
};
