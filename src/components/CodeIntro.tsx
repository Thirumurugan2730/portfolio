import React, { useState, useEffect, useRef } from 'react';
import { Play, FastForward, CheckCircle2 } from 'lucide-react';

interface CodeIntroProps {
  onComplete: () => void;
}

const CPP_CODE_LINES = [
  '#include <iostream>',
  '#include <dedication>',
  '#include <compassion>',
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
  const [compileMessage, setCompileMessage] = useState<string>('');
  const [isExiting, setIsExiting] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Natural typing effect
  useEffect(() => {
    if (currentLineIndex >= CPP_CODE_LINES.length) {
      setIsTypingDone(true);
      timerRef.current = setTimeout(() => {
        handleCompileAndRun();
      }, 250);
      return;
    }

    const targetLine = CPP_CODE_LINES[currentLineIndex];

    if (currentCharIndex < targetLine.length) {
      const speed = targetLine.length === 0 ? 30 : Math.floor(Math.random() * 8) + 26;
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
      }, 90);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentLineIndex, currentCharIndex]);

  const handleCompileAndRun = () => {
    if (isCompiling || isExiting) return;
    setIsCompiling(true);
    if (timerRef.current) clearTimeout(timerRef.current);

    setDisplayedLines(CPP_CODE_LINES);
    setIsTypingDone(true);

    setCompileMessage('Compiling main.cpp...');

    setTimeout(() => {
      setCompileMessage("Build succeeded. Launching portfolio...");
    }, 450);

    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 350);
    }, 850);
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 120);
  };

  // Pure Tokenizer - Left to right, no premature quotes
  const renderTokenizedLine = (text: string) => {
    if (!text) return <span>&nbsp;</span>;

    const tokens: React.ReactNode[] = [];
    let i = 0;
    while (i < text.length) {
      if (text[i] === ' ') {
        tokens.push(<span key={i}> </span>);
        i++;
        continue;
      }

      if (text.startsWith('#include', i)) {
        tokens.push(<span key={i} className="text-violet-400 font-semibold">#include</span>);
        i += 8;
        continue;
      }

      if (text[i] === '<') {
        const end = text.indexOf('>', i);
        if (end !== -1) {
          const content = text.slice(i, end + 1);
          tokens.push(
            <span key={i} className="text-emerald-400/90 font-medium">
              {content}
            </span>
          );
          i = end + 1;
        } else {
          tokens.push(<span key={i} className="text-emerald-400/90 font-medium">{text.slice(i)}</span>);
          break;
        }
        continue;
      }

      if (text[i] === '"') {
        const end = text.indexOf('"', i + 1);
        if (end !== -1) {
          tokens.push(
            <span key={i} className="text-emerald-300 font-medium">
              {text.slice(i, end + 1)}
            </span>
          );
          i = end + 1;
        } else {
          tokens.push(
            <span key={i} className="text-emerald-300 font-medium">
              {text.slice(i)}
            </span>
          );
          break;
        }
        continue;
      }

      if (text.startsWith('<<', i)) {
        tokens.push(<span key={i} className="text-zinc-400">&lt;&lt;</span>);
        i += 2;
        continue;
      }

      if (text.startsWith('::', i)) {
        tokens.push(<span key={i} className="text-zinc-500">::</span>);
        i += 2;
        continue;
      }

      if (text.startsWith('int', i) && (i + 3 === text.length || /[\s(]/.test(text[i + 3]))) {
        tokens.push(<span key={i} className="text-violet-400 font-medium">int</span>);
        i += 3;
        continue;
      }

      if (text.startsWith('main', i) && (i + 4 === text.length || /[\s(]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-amber-300 font-medium">main</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('std', i) && (i + 3 === text.length || text.startsWith('::', i + 3))) {
        tokens.push(<span key={i} className="text-zinc-300">std</span>);
        i += 3;
        continue;
      }

      if (text.startsWith('cout', i) && (i + 4 === text.length || /[\s<]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-violet-300 font-medium">cout</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('endl', i) && (i + 4 === text.length || /[\s;]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-violet-300 font-medium">endl</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('return', i) && (i + 6 === text.length || /\s/.test(text[i + 6]))) {
        tokens.push(<span key={i} className="text-violet-400 font-semibold">return</span>);
        i += 6;
        continue;
      }

      if (text[i] === '0' && (i === 0 || /\s/.test(text[i - 1])) && (i + 1 === text.length || /;/.test(text[i + 1]))) {
        tokens.push(<span key={i} className="text-amber-400 font-medium">0</span>);
        i++;
        continue;
      }

      if ('{}();'.includes(text[i])) {
        tokens.push(<span key={i} className="text-zinc-400">{text[i]}</span>);
        i++;
        continue;
      }

      tokens.push(<span key={i} className="text-zinc-200">{text[i]}</span>);
      i++;
    }

    return <>{tokens}</>;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#08080a] transition-all duration-300 overflow-hidden ${
        isExiting ? 'opacity-0 scale-[0.99] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-950/20 rounded-full blur-[140px] animate-ambient-drift" />
      </div>

      {/* Editor Frame - Clean, Professional Developer Terminal */}
      <div className="relative w-full max-w-3xl rounded-xl border border-zinc-800 bg-[#0e0e12]/95 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden flex flex-col">
        
        {/* Editor Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#121217] border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-700/80" />
            <span className="w-3 h-3 rounded-full bg-zinc-700/80" />
            <span className="w-3 h-3 rounded-full bg-zinc-700/80" />
            
            <div className="ml-3 px-2.5 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/40 flex items-center gap-1.5 text-xs font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>main.cpp</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSkip}
              className="text-xs text-zinc-400 hover:text-zinc-200 px-2.5 py-1 rounded hover:bg-zinc-800/60 transition flex items-center gap-1 font-mono cursor-pointer"
              title="Skip to homepage"
            >
              <FastForward className="w-3 h-3 text-zinc-400" />
              <span>Skip</span>
            </button>

            {/* Compile & Run Button */}
            <button
              onClick={handleCompileAndRun}
              disabled={isCompiling}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium font-mono transition-all duration-200 cursor-pointer ${
                isCompiling
                  ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30 cursor-wait'
                  : isTypingDone
                  ? 'bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-sm'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
              }`}
            >
              {isCompiling ? (
                <>
                  <span className="w-3 h-3 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
                  <span>Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current text-zinc-300" />
                  <span>Run</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed bg-[#0b0b0e] text-zinc-200 overflow-x-hidden min-h-[250px]">
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="w-7 shrink-0 text-zinc-600 select-none text-right pr-3.5 text-xs pt-0.5 font-mono">
                {idx + 1}
              </span>
              <span className="flex-1 whitespace-pre-wrap break-words">
                {renderTokenizedLine(line)}
                {idx === currentLineIndex && !isTypingDone && (
                  <span className="inline-block w-1.5 h-3.5 bg-violet-400 ml-0.5 animate-pulse align-middle" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Clean Status Banner */}
        {isCompiling && (
          <div className="border-t border-zinc-800/80 bg-[#101015] px-4 py-2.5 flex items-center justify-between font-mono text-xs text-zinc-300 animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>{compileMessage}</span>
            </div>
            <span className="text-[11px] text-zinc-500">Exit Code: 0</span>
          </div>
        )}

      </div>
    </div>
  );
};
