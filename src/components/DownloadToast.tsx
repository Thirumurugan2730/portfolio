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
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] backdrop-blur-2xl bg-zinc-900/95 border border-zinc-700/80 rounded-2xl p-4 shadow-2xl shadow-black/90 transition-all duration-300 animate-float-gentle"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-zinc-800 text-zinc-200 border border-zinc-700 shrink-0">
          <FileText className="w-5 h-5" />
        </div>

        <div className="flex-1 pr-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Download Triggered</span>
          </div>
          <h4 className="text-sm font-semibold text-zinc-100">
            {PORTFOLIO_CONFIG.cv.fileName}
          </h4>
          <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
            {PORTFOLIO_CONFIG.cv.notice}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-zinc-200 p-1 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
