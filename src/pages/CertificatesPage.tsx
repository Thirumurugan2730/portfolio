import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Calendar, BookmarkCheck } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export const CertificatesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Background Lighting Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[700px] h-[550px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      <PageHeader currentSection="Certificates" />

      <main className="relative max-w-5xl mx-auto w-full z-10 py-10 sm:py-14 my-auto text-left">
        {/* Page Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4">
            <Award className="w-3.5 h-3.5 text-violet-400" />
            <span>Credentials Gallery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Certificates & Qualifications
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Verified academic milestones, practical laboratory credentials, and institutional research records completed at Sri Krishna College of Technology.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_CONFIG.certificates.map((cert) => (
            <article
              key={cert.id}
              className="glass-surface glass-surface-hover rounded-2xl p-6 border border-zinc-800/90 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Card Icon & Verification Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-900/40 flex items-center justify-center text-violet-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <h2 className="text-lg font-bold text-zinc-100 mb-2 leading-snug">
                  {cert.title}
                </h2>
                
                <p className="text-xs font-medium text-zinc-300 mb-3">
                  {cert.issuer}
                </p>

                {/* Overview */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cert.overview}
                </p>
              </div>

              {/* Bottom Meta */}
              <div className="pt-4 border-t border-zinc-800/70 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1 text-zinc-400">
                      <BookmarkCheck className="w-3 h-3 text-violet-400" />
                      <span>{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 pb-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>Verified Academic Credentials & Technical Coursework</span>
      </footer>
    </div>
  );
};
