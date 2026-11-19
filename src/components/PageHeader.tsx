import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Menu, X, Home } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface PageHeaderProps {
  currentSection?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ currentSection }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative z-30 max-w-5xl mx-auto w-full pt-6 pb-6 px-4 sm:px-6 border-b border-zinc-800/80">
      <div className="flex items-center justify-between">
        
        {/* Left: Brand Monogram & Back Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition-all duration-200 cursor-pointer shadow-sm group"
            title="Return to Home Screen"
            aria-label="Return to Home"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200 text-zinc-400" />
            <span className="hidden sm:inline">Home</span>
            <Home className="w-3.5 h-3.5 sm:hidden" />
          </button>

          <Link
            to="/about"
            className="flex items-center gap-2.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-[10px] font-bold text-zinc-200">
              TS
            </span>
            <span className="hidden md:inline font-semibold text-zinc-200">{PORTFOLIO_CONFIG.name}</span>
            {currentSection && (
              <>
                <span className="text-zinc-600">/</span>
                <span className="text-violet-400 font-medium">{currentSection}</span>
              </>
            )}
          </Link>
        </div>

        {/* Center/Right: Desktop Navigation Bar */}
        <nav className="hidden sm:flex items-center gap-1 bg-zinc-950/80 border border-zinc-800/90 rounded-xl p-1 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-200 font-medium cursor-pointer ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700/60 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-4 pt-4 border-t border-zinc-800/80 flex flex-col gap-1.5 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 font-semibold border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
