import React, { useState, useEffect, useRef } from 'react';
import { Play, Terminal, CheckCircle2, FastForward } from 'lucide-react';

interface CodeIntroProps {
  onComplete: () => void;
}

const CPP_CODE_LINES = [
  '#include <iostream>',
  '#include <string>',
  '',
  'int main() {',
  '    std::cout << "Thirumurugan S" << std::endl;',
  '    std::cout << "Final Year B.E. Computer Science and Engineering Student" << std::endl;',
  '    return 0;',
  '}'
];

export const CodeIntro: React.FC<CodeIntroProps> = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(['']);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileOutput, setCompileOutput] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= CPP_CODE_LINES.length) {
      setIsTypingDone(true);
      // Automatically trigger compile & run 800ms after typing finishes
      timerRef.current = setTimeout(() => {
        handleCompileAndRun();
      }, 900);
      return;
    }

    const targetLine = CPP_CODE_LINES[currentLineIndex];

    if (currentCharIndex < targetLine.length) {
      // Type next char
      const speed = targetLine.length === 0 ? 50 : Math.floor(Math.random() * 15) + 20; // 20-35ms
      timerRef.current = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[currentLineIndex] = targetLine.slice(0, currentCharIndex + 1);
          return next;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
    } else {
      // Move to next line
      timerRef.current = setTimeout(() => {
        setDisplayedLines(prev => [...prev, '']);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 70);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLineIndex, currentCharIndex]);

  const handleCompileAndRun = () => {
    if (isCompiling || isExiting) return;
    setIsCompiling(true);
    if (timerRef.current) clearTimeout(timerRef.current);

    // Show full code immediately if user clicked run early
    setDisplayedLines(CPP_CODE_LINES);
    setIsTypingDone(true);

    // Stage 1: Compiling
    setCompileOutput(['$ g++ -O3 main.cpp -o portfolio']);
    
    setTimeout(() => {
      setCompileOutput(prev => [...prev, 'Compiling main.cpp... [Build Finished: 0 errors]']);
    }, 450);

    // Stage 2: Running output
    setTimeout(() => {
      setCompileOutput(prev => [
        ...prev,
        '$ ./portfolio',
        'Thirumurugan S',
        'Final Year B.E. Computer Science and Engineering Student'
      ]);
    }, 950);

    // Stage 3: Smooth transition to the portfolio
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 550);
    }, 1800);
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  // Syntax highlighter helper
  const renderHighlightedLine = (line: string) => {
    if (!line) return <span>&nbsp;</span>;

    if (line.startsWith('#include')) {
      const parts = line.split(' ');
      return (
        <span>
          <span className="text-pink-400 font-semibold">{parts[0]}</span>{' '}
          <span className="text-emerald-300">{parts.slice(1).join(' ')}</span>
        </span>
      );
    }

    if (line.includes('int main()')) {
      return (
        <span>
          <span className="text-indigo-400 font-semibold">int</span>{' '}
          <span className="text-yellow-300 font-semibold">main</span>
          <span className="text-slate-300">() {'{'}</span>
        </span>
      );
    }

    if (line.includes('return 0;')) {
      return (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-pink-400 font-semibold">return</span>{' '}
          <span className="text-purple-300">0</span>
          <span className="text-slate-300">;</span>
        </span>
      );
    }

    if (line.includes('std::cout')) {
      // Split around string literal
      const quoteMatch = line.match(/"([^"]*)"/);
      if (quoteMatch) {
        const textInside = quoteMatch[1];
        return (
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-cyan-400">std</span>
            <span className="text-slate-400">::</span>
            <span className="text-blue-300">cout</span>{' '}
            <span className="text-pink-400">&lt;&lt;</span>{' '}
            <span className="text-emerald-300">"{textInside}"</span>{' '}
            <span className="text-pink-400">&lt;&lt;</span>{' '}
            <span className="text-cyan-400">std</span>
            <span className="text-slate-400">::</span>
            <span className="text-blue-300">endl</span>
            <span className="text-slate-300">;</span>
          </span>
        );
      }
    }

    if (line.trim() === '}') {
      return <span className="text-slate-300">{'}'}</span>;
    }

    return <span className="text-slate-200">{line}</span>;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#070a12] transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl overflow-hidden flex flex-col">
        {/* IDE Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <span className="text-cyan-400 font-semibold">C++</span>
              <span>main.cpp</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSkip}
              className="text-xs text-slate-400 hover:text-slate-200 px-2.5 py-1 rounded-md hover:bg-slate-800 transition flex items-center gap-1 font-mono cursor-pointer"
              title="Skip intro"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>Skip</span>
            </button>

            {/* Compile & Run Button */}
            <button
              onClick={handleCompileAndRun}
              disabled={isCompiling}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wide transition shadow-md cursor-pointer ${
                isCompiling
                  ? 'bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 cursor-wait'
                  : isTypingDone
                  ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/30 animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
              }`}
            >
              {isCompiling ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                  <span>Compiling & Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Compile & Run</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Editor Body */}
        <div className="p-5 font-mono text-sm sm:text-base leading-relaxed bg-slate-950/90 text-slate-200 overflow-x-auto min-h-[220px]">
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="w-8 shrink-0 text-slate-600 select-none text-right pr-4 text-xs pt-0.5">
                {idx + 1}
              </span>
              <span className="flex-1 whitespace-pre">
                {renderHighlightedLine(line)}
                {idx === currentLineIndex && !isTypingDone && (
                  <span className="inline-block w-2 h-4 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Console / Terminal Section */}
        {compileOutput.length > 0 && (
          <div className="border-t border-slate-800 bg-black/60 p-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-400 mb-2 pb-1 border-b border-slate-800/80">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300 font-semibold">Terminal Output</span>
              {compileOutput.length >= 3 && (
                <span className="flex items-center gap-1 text-emerald-400 text-xs ml-auto">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Process exited with code 0</span>
                </span>
              )}
            </div>
            <div className="space-y-1">
              {compileOutput.map((out, i) => (
                <div
                  key={i}
                  className={`${
                    out.startsWith('$')
                      ? 'text-cyan-400 font-medium'
                      : out.includes('Build Finished')
                      ? 'text-emerald-400'
                      : 'text-slate-100 font-semibold pl-2 border-l-2 border-indigo-500'
                  }`}
                >
                  {out}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
