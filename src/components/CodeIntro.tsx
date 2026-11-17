import React, { useState, useEffect, useRef } from 'react';
import { Play, Sparkles, FastForward, Coffee, Rocket, CheckCircle } from 'lucide-react';

interface CodeIntroProps {
  onComplete: () => void;
}

const CPP_CODE_LINES = [
  '#include <iostream>',
  '#include <superpowers>',
  '',
  'int main() {',
  '    // Warning: Highly passionate engineer ahead! ⚡',
  '    std::cout << "Thirumurugan S" << std::endl;',
  '    std::cout << "Final Year B.E. CSE Student" << std::endl;',
  '    return 0; // 0 errors, 0 warnings, 100% vibes 😎',
  '}'
];

const FUNNY_OUTPUTS = [
  { text: '☕ Brewing freshly roasted coffee & squashing bugs...', icon: 'coffee' },
  { text: '⚡ Overclocking brain cells to 5.0 GHz... Done!', icon: 'sparkle' },
  { text: '🎯 Output:', icon: 'output' },
  { text: '   ➜ Thirumurugan S', icon: 'name' },
  { text: '   ➜ Final Year B.E. Computer Science and Engineering Student', icon: 'role' },
  { text: '🚀 All systems GO! Teleporting to Portfolio in 3.. 2.. 1..', icon: 'rocket' }
];

export const CodeIntro: React.FC<CodeIntroProps> = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(['']);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputStep, setOutputStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing simulation
  useEffect(() => {
    if (currentLineIndex >= CPP_CODE_LINES.length) {
      setIsTypingDone(true);
      // Auto-trigger Compile & Run after typing finishes
      timerRef.current = setTimeout(() => {
        handleCompileAndRun();
      }, 700);
      return;
    }

    const targetLine = CPP_CODE_LINES[currentLineIndex];

    if (currentCharIndex < targetLine.length) {
      const speed = targetLine.length === 0 ? 30 : Math.floor(Math.random() * 12) + 16;
      timerRef.current = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[currentLineIndex] = targetLine.slice(0, currentCharIndex + 1);
          return next;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
    } else {
      timerRef.current = setTimeout(() => {
        setDisplayedLines(prev => [...prev, '']);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 50);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLineIndex, currentCharIndex]);

  const handleCompileAndRun = () => {
    if (isCompiling || isExiting) return;
    setIsCompiling(true);
    if (timerRef.current) clearTimeout(timerRef.current);

    // Show full code immediately
    setDisplayedLines(CPP_CODE_LINES);
    setIsTypingDone(true);

    // Stagger funny outputs
    setOutputStep(1);

    setTimeout(() => setOutputStep(2), 400);
    setTimeout(() => setOutputStep(3), 850);
    setTimeout(() => setOutputStep(4), 1250);
    setTimeout(() => setOutputStep(5), 1650);
    setTimeout(() => setOutputStep(6), 2100);

    // Transition to main screen
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 3100);
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  // Syntax highlighting
  const renderHighlightedLine = (line: string) => {
    if (!line) return <span>&nbsp;</span>;

    if (line.startsWith('#include')) {
      const parts = line.split(' ');
      return (
        <span>
          <span className="text-pink-400 font-bold">{parts[0]}</span>{' '}
          <span className="text-emerald-300 font-semibold">{parts.slice(1).join(' ')}</span>
        </span>
      );
    }

    if (line.trim().startsWith('//')) {
      return <span className="text-amber-300/80 italic font-mono">{line}</span>;
    }

    if (line.includes('int main()')) {
      return (
        <span>
          <span className="text-cyan-400 font-bold">int</span>{' '}
          <span className="text-yellow-300 font-bold">main</span>
          <span className="text-purple-300 font-bold">() {'{'}</span>
        </span>
      );
    }

    if (line.includes('return 0;')) {
      const parts = line.split('//');
      return (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-pink-400 font-bold">return</span>{' '}
          <span className="text-amber-400 font-bold">0</span>
          <span className="text-slate-300">;</span>
          {parts[1] && <span className="text-emerald-400/80 italic"> // {parts[1]}</span>}
        </span>
      );
    }

    if (line.includes('std::cout')) {
      const quoteMatch = line.match(/"([^"]*)"/);
      const textInside = quoteMatch ? quoteMatch[1] : '';
      return (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-cyan-400 font-bold">std</span>
          <span className="text-purple-400 font-bold">::</span>
          <span className="text-yellow-300 font-bold">cout</span>{' '}
          <span className="text-pink-400 font-bold">&lt;&lt;</span>{' '}
          <span className="text-emerald-300 font-semibold bg-emerald-950/40 px-1 py-0.5 rounded">
            "{textInside}"
          </span>{' '}
          <span className="text-pink-400 font-bold">&lt;&lt;</span>{' '}
          <span className="text-cyan-400 font-bold">std</span>
          <span className="text-purple-400 font-bold">::</span>
          <span className="text-yellow-300 font-bold">endl</span>
          <span className="text-slate-300">;</span>
        </span>
      );
    }

    if (line.trim() === '}') {
      return <span className="text-purple-300 font-bold">{'}'}</span>;
    }

    return <span className="text-slate-200">{line}</span>;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-[#060813] transition-all duration-500 overflow-hidden ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Super vibrant animated neon background aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-600/25 via-pink-600/20 to-purple-800/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/25 via-teal-500/20 to-indigo-600/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Subtle retro matrix/grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f712_1px,transparent_1px),linear-gradient(to_bottom,#06b6d412_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60" />
      </div>

      {/* Vibrant Gradient Framed IDE Container - Bigger & Zero Horizontal Scrollbar */}
      <div className="relative w-full max-w-5xl rounded-3xl p-[2.5px] bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-amber-400 shadow-[0_0_60px_rgba(168,85,247,0.35)] transition-all duration-300">
        <div className="w-full rounded-[22px] bg-[#0c0f1d]/95 backdrop-blur-2xl flex flex-col overflow-hidden">
          
          {/* Top IDE Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#080b16] border-b border-purple-500/20">
            {/* Window controls with playful colors */}
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50 hover:scale-110 transition cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 hover:scale-110 transition cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 hover:scale-110 transition cursor-pointer" />
              
              {/* File tab */}
              <div className="ml-3 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-cyan-300 font-bold">main.cpp</span>
                <span className="text-pink-400 text-[10px] uppercase font-bold tracking-wider">⚡ Turbo C++</span>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSkip}
                className="text-xs text-slate-400 hover:text-pink-300 px-3 py-1.5 rounded-lg hover:bg-purple-900/30 transition flex items-center gap-1.5 font-mono cursor-pointer"
                title="Skip to portfolio"
              >
                <FastForward className="w-3.5 h-3.5 text-pink-400" />
                <span>Skip</span>
              </button>

              {/* Ultra Vibrant Run Button */}
              <button
                onClick={handleCompileAndRun}
                disabled={isCompiling}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-wide transition-all duration-200 shadow-lg cursor-pointer ${
                  isCompiling
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-emerald-500/40 cursor-wait'
                    : isTypingDone
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:brightness-110 text-white shadow-pink-500/40 scale-105 animate-pulse'
                    : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:brightness-110 text-white shadow-indigo-600/30'
                }`}
              >
                {isCompiling ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Executing Genius Code...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-yellow-300" />
                    <span>Compile & Run (F5) 🔥</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bigger Code Editor Body - ZERO HORIZONTAL SCROLLBAR */}
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base lg:text-lg leading-relaxed bg-[#0a0d1a] text-slate-100 overflow-x-hidden min-h-[260px] sm:min-h-[300px]">
            {displayedLines.map((line, idx) => (
              <div key={idx} className="flex items-start group">
                <span className="w-10 shrink-0 text-slate-600 select-none text-right pr-4 text-xs sm:text-sm pt-0.5 font-mono group-hover:text-purple-400 transition-colors">
                  {idx + 1}
                </span>
                <span className="flex-1 whitespace-pre-wrap break-words">
                  {renderHighlightedLine(line)}
                  {idx === currentLineIndex && !isTypingDone && (
                    <span className="inline-block w-2.5 h-5 bg-gradient-to-b from-pink-400 to-cyan-400 ml-1 animate-pulse align-middle rounded-sm shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Super Vibrant & Funny Output Console */}
          {outputStep > 0 && (
            <div className="border-t-2 border-purple-500/30 bg-[#070914] p-5 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden animate-fadeIn">
              {/* Terminal Title Bar */}
              <div className="flex items-center gap-2 text-slate-400 mb-3 pb-2 border-b border-purple-900/40">
                <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 font-bold uppercase tracking-wider text-xs">
                  Execution Output Console
                </span>
                <span className="ml-auto text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Build Succeeded • 0 bugs found</span>
                </span>
              </div>

              {/* Funny Animated Output Lines */}
              <div className="space-y-2">
                {outputStep >= 1 && (
                  <div className="flex items-center gap-2 text-amber-300 font-medium">
                    <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{FUNNY_OUTPUTS[0].text}</span>
                  </div>
                )}
                {outputStep >= 2 && (
                  <div className="flex items-center gap-2 text-cyan-300 font-medium">
                    <span className="text-cyan-400 font-bold">⚡</span>
                    <span>{FUNNY_OUTPUTS[1].text}</span>
                  </div>
                )}
                {outputStep >= 3 && (
                  <div className="text-pink-400 font-bold text-sm tracking-wide pt-1">
                    {FUNNY_OUTPUTS[2].text}
                  </div>
                )}
                {outputStep >= 4 && (
                  <div className="pl-4 py-1 border-l-4 border-cyan-400 bg-cyan-950/30 rounded-r-lg">
                    <span className="text-white text-base sm:text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-200">
                      {FUNNY_OUTPUTS[3].text}
                    </span>
                  </div>
                )}
                {outputStep >= 5 && (
                  <div className="pl-4 py-1 border-l-4 border-fuchsia-400 bg-fuchsia-950/30 rounded-r-lg">
                    <span className="text-pink-200 text-sm sm:text-base font-semibold">
                      {FUNNY_OUTPUTS[4].text}
                    </span>
                  </div>
                )}
                {outputStep >= 6 && (
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base pt-2 animate-bounce">
                    <Rocket className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{FUNNY_OUTPUTS[5].text}</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
