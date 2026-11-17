import React, { useEffect } from 'react';
import { CheckCircle2, FileText, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface DownloadToastProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadToast: React.FC<DownloadToastProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, 5500);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] backdrop-blur-xl bg-[#0f0d18]/95 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl shadow-black/80 transition-all duration-300 animate-float-soft"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
          <FileText className="w-5 h-5" />
        </div>

        <div className="flex-1 pr-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Download Triggered</span>
          </div>
          <h4 className="text-sm font-semibold text-amber-200">
            {PORTFOLIO_CONFIG.cv.fileName}
          </h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            {PORTFOLIO_CONFIG.cv.notice}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-200 p-1 rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
