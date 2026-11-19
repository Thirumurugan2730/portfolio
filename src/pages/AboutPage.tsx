import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, Briefcase, Award, Mail, Download, Sparkles, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface AboutPageProps {
  onDownloadCV: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onDownloadCV }) => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Subtle Background Ambient Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-violet-950/15 rounded-full blur-[170px] animate-ambient-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-zinc-800/10 rounded-full blur-[140px] animate-ambient-drift" style={{ animationDelay: '3.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      {/* Global Navigation Header */}
      <PageHeader currentSection="About" />

      {/* Main Container */}
      <main className="relative max-w-5xl mx-auto w-full z-10 py-10 sm:py-14 my-auto">
        
        {/* Section 1: Hero Introduction */}
        <section className="mb-14 text-left">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span>Profile Introduction</span>
          </div>

          {/* Name & Designation */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 mb-3 select-none">
            {PORTFOLIO_CONFIG.name}
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-300 font-medium leading-relaxed mb-6">
            {PORTFOLIO_CONFIG.designation}
          </p>

          {/* Institutional Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 mb-8 font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/90">
              <Building2 className="w-4 h-4 text-violet-400" />
              <span>{PORTFOLIO_CONFIG.college}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800/90">
              <MapPin className="w-4 h-4 text-zinc-500" />
              <span>{PORTFOLIO_CONFIG.location}</span>
            </div>
          </div>

          {/* Concise Professional Bio (Verified facts only) */}
          <div className="glass-surface rounded-2xl p-6 sm:p-8 max-w-4xl border border-zinc-800/80 relative overflow-hidden shadow-xl">
            <div className="space-y-3.5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Final Year B.E. Computer Science and Engineering student at <span className="text-zinc-100 font-medium">Sri Krishna College of Technology, Coimbatore</span>.
              </p>
              <p>
                My technical interests center around <span className="text-zinc-100 font-medium">software development and application engineering</span>. I enjoy analytical problem-solving and writing structured code that translates theoretical computational principles into practical, reliable software solutions.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Committed to foundational software craft: building reliable, maintainable applications with attention to code cleanliness, performance, and long-term durability.
              </p>
            </div>

            {/* Quick Action: Download CV */}
            <div className="mt-6 pt-5 border-t border-zinc-800/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Academic & Engineering Profile</span>
              </div>

              <button
                onClick={onDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                <Download className="w-3.5 h-3.5 text-violet-400" />
                <span>Download CV (PDF)</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Four Interactive Navigation Sections */}
        <section className="text-left">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                Portfolio Hub
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Explore dedicated sections detailing technical work, academic journey, and contact channels.
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-violet-400 hidden sm:block" />
          </div>

          {/* Interactive Navigation Grid - Asymmetric Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            
            {/* 1. Projects Card (Featured Visual Emphasis) */}
            <div
              onClick={() => navigate('/projects')}
              className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 border border-zinc-800 cursor-pointer group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/projects')}
              aria-label="Navigate to Projects page"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-800/40 flex items-center justify-center text-violet-300 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <Code2 className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 group-hover:text-violet-300 transition-colors">
                  Featured Projects
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Explore practical software implementations, post-quantum cryptographic systems (ADAPTQ-VPN), and modern web platforms.
                </p>

                {/* Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    ADAPTQ-VPN
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    Web Platform
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    C++ / Python / TS
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <span>View Project Case Studies</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 2. Experience Card */}
            <div
              onClick={() => navigate('/experience')}
              className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 border border-zinc-800 cursor-pointer group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/experience')}
              aria-label="Navigate to Experience page"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <Briefcase className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 group-hover:text-violet-300 transition-colors">
                  Experience & Timeline
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Academic timeline at Sri Krishna College of Technology, technical prototyping, research activities, and career readiness.
                </p>

                {/* Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    SKCT • 2021-Present
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    Research Prototyping
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <span>View Academic & Technical Path</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 3. Certificates Card */}
            <div
              onClick={() => navigate('/certificates')}
              className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 border border-zinc-800 cursor-pointer group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/certificates')}
              aria-label="Navigate to Certificates page"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <Award className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 group-hover:text-violet-300 transition-colors">
                  Certificates & Credentials
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Verified degree candidacy, laboratory credentials, and foundational coursework in computer science disciplines.
                </p>

                {/* Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    B.E. Degree Track
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    CS Curriculum
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <span>Inspect Credentials Gallery</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* 4. Contact Card */}
            <div
              onClick={() => navigate('/contact')}
              className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 border border-zinc-800 cursor-pointer group flex flex-col justify-between relative overflow-hidden transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/contact')}
              aria-label="Navigate to Contact page"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    <Mail className="w-5 h-5 text-violet-400" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 mb-2 group-hover:text-violet-300 transition-colors">
                  Contact & Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  Reach out directly for software engineering opportunities, collaborations, or professional correspondence.
                </p>

                {/* Preview Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    {PORTFOLIO_CONFIG.email}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800 text-[11px] font-mono">
                    GitHub / LinkedIn
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
                <span>Open Communication Channels</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 pb-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>B.E. Computer Science & Engineering • SKCT</span>
      </footer>
    </div>
  );
};
