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
    }, 4500);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] glass-surface rounded-xl p-4 shadow-xl shadow-black/80 transition-all duration-300 animate-toast-slide"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-zinc-800/80 text-violet-400 border border-zinc-700/60 shrink-0">
          <FileText className="w-4 h-4" />
        </div>

        <div className="flex-1 pr-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-0.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Download Initiated</span>
          </div>
          <h4 className="text-xs font-medium text-zinc-200">
            {PORTFOLIO_CONFIG.cv.fileName}
          </h4>
          <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
            Placeholder CV downloaded. Integration ready for official document.
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800 transition-colors cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
