import React from 'react';
import { ExternalLink, Code2, ShieldAlert, Cpu } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export const ProjectsPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Background Lighting Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      <PageHeader currentSection="Projects" />

      <main className="relative max-w-5xl mx-auto w-full z-10 py-10 sm:py-14 my-auto text-left">
        {/* Page Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4">
            <Code2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Projects & Engineering Work
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Practical software implementations, research prototypes, and application systems engineered with focus on reliability, performance, and clean architecture.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {PORTFOLIO_CONFIG.projects.map((project, index) => (
            <article
              key={project.id}
              className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-8 border border-zinc-800/90 relative overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Top Meta Line */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                    {project.id === 'adaptq-vpn' ? 'Research & Security Architecture' : 'Web Engineering'}
                  </span>
                </div>
                
                <span className="text-xs font-mono text-zinc-500">
                  Project {index + 1} of {PORTFOLIO_CONFIG.projects.length}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-1.5 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-medium mb-4">
                {project.subtitle}
              </p>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {project.overview}
              </p>

              {/* Key Contributions */}
              <div className="mb-6">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-violet-400" />
                  <span>Key Architectural Contributions:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
                  {project.keyContributions.map((contribution, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0" />
                      <span className="leading-relaxed">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 text-xs font-medium transition-all duration-200 shadow-sm group"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-zinc-500">
                    <ShieldAlert className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Institutional Research Prototype</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 pb-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>Projects & Engineering Architecture</span>
      </footer>
    </div>
  );
};
