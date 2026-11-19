import React, { useState } from 'react';
import { Mail, Send, Copy, Check, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Open user's email client
    window.open(mailtoUrl, '_blank');

    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 overflow-hidden bg-[#08080a] animate-hero-reveal">
      {/* Background Lighting Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-violet-950/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-20" />
      </div>

      <PageHeader currentSection="Contact" />

      <main className="relative max-w-5xl mx-auto w-full z-10 py-10 sm:py-14 my-auto text-left">
        {/* Page Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 mb-4">
            <Mail className="w-3.5 h-3.5 text-violet-400" />
            <span>Communication & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100 mb-3">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Interested in discussing software engineering opportunities, project collaborations, or technical questions? Feel free to connect directly.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="glass-surface rounded-2xl p-6 border border-zinc-800/90 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-950/40 border border-violet-900/40 flex items-center justify-center text-violet-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                  Primary Contact
                </span>
              </div>

              <h2 className="text-base font-semibold text-zinc-100 mb-1">
                Email Address
              </h2>
              <p className="text-xs text-zinc-400 mb-4">
                Direct mailbox for professional correspondence and career inquiries.
              </p>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-zinc-200 truncate">
                  {PORTFOLIO_CONFIG.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="text-[11px] text-emerald-400 mt-2 font-mono flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3 h-3" />
                  <span>Email copied to clipboard!</span>
                </p>
              )}
            </div>

            {/* Social & Professional Links */}
            <div className="glass-surface rounded-2xl p-6 border border-zinc-800/90 shadow-xl space-y-3">
              <h2 className="text-sm font-semibold text-zinc-200 mb-3 font-mono uppercase tracking-wider text-xs">
                Professional Profiles
              </h2>

              {/* GitHub */}
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-white">GitHub</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">@Thirumurugan2730</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white">
                    <LinkedinIcon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-200 group-hover:text-white">LinkedIn</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">Thirumurugan S</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-surface rounded-2xl p-6 sm:p-8 border border-zinc-800/90 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                <h2 className="text-lg font-bold text-zinc-100">
                  Send a Direct Message
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the details below to dispatch a message directly via your email client to <span className="text-zinc-300 font-mono">{PORTFOLIO_CONFIG.email}</span>.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    Email Client Dispatched
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your pre-composed email has been generated. If your default mail application didn't open automatically, you can email directly at <span className="text-zinc-200 font-mono">{PORTFOLIO_CONFIG.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition cursor-pointer mt-2"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Jane Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-violet-500 focus:outline-none text-xs text-zinc-100 placeholder:text-zinc-600 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. jane@example.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-violet-500 focus:outline-none text-xs text-zinc-100 placeholder:text-zinc-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Software Engineering Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-violet-500 focus:outline-none text-xs text-zinc-100 placeholder:text-zinc-600 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-violet-500 focus:outline-none text-xs text-zinc-100 placeholder:text-zinc-600 transition resize-y min-h-[100px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-all duration-200 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Email Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto w-full pt-8 pb-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-2">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}</span>
        <span>Contact & Professional Correspondence</span>
      </footer>
    </div>
  );
};
