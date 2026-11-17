import React, { useState, useEffect, useRef } from 'react';
import { Play, FastForward, Sparkles } from 'lucide-react';

interface CodeIntroProps {
  onComplete: () => void;
}

const CPP_CODE_LINES = [
  '#include <iostream>',
  '#include <dedication>',
  '#include <compassion>',
  '#include <passion>',
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

  // Typing effect
  useEffect(() => {
    if (currentLineIndex >= CPP_CODE_LINES.length) {
      setIsTypingDone(true);
      timerRef.current = setTimeout(() => {
        handleCompileAndRun();
      }, 200);
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
      }, 120);
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

    setCompileMessage('⚡ Compiling with dedication & compassion...');

    setTimeout(() => {
      setCompileMessage("🚀 Entering Thiru's World...");
    }, 700);

    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 450);
    }, 1300);
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 120);
  };

  // Pure Tokenizer - neat, elegant syntax highlighting
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
        tokens.push(<span key={i} className="text-purple-400 font-semibold">#include</span>);
        i += 8;
        continue;
      }

      if (text[i] === '<') {
        const end = text.indexOf('>', i);
        if (end !== -1) {
          const content = text.slice(i, end + 1);
          const isHeart = content.includes('dedication') || content.includes('compassion') || content.includes('passion');
          tokens.push(
            <span key={i} className={`font-medium ${isHeart ? 'text-amber-300/90' : 'text-emerald-400'}`}>
              {content}
            </span>
          );
          i = end + 1;
        } else {
          tokens.push(<span key={i} className="text-emerald-400 font-medium">{text.slice(i)}</span>);
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
        tokens.push(<span key={i} className="text-purple-400 font-medium">int</span>);
        i += 3;
        continue;
      }

      if (text.startsWith('main', i) && (i + 4 === text.length || /[\s(]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-amber-300 font-semibold">main</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('std', i) && (i + 3 === text.length || text.startsWith('::', i + 3))) {
        tokens.push(<span key={i} className="text-zinc-300">std</span>);
        i += 3;
        continue;
      }

      if (text.startsWith('cout', i) && (i + 4 === text.length || /[\s<]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-purple-300 font-medium">cout</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('endl', i) && (i + 4 === text.length || /[\s;]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-purple-300 font-medium">endl</span>);
        i += 4;
        continue;
      }

      if (text.startsWith('return', i) && (i + 6 === text.length || /\s/.test(text[i + 6]))) {
        tokens.push(<span key={i} className="text-purple-400 font-semibold">return</span>);
        i += 6;
        continue;
      }

      if (text[i] === '0' && (i === 0 || /\s/.test(text[i - 1])) && (i + 1 === text.length || /;/.test(text[i + 1]))) {
        tokens.push(<span key={i} className="text-amber-400 font-semibold">0</span>);
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
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#070709] transition-all duration-500 overflow-hidden ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle, Animatic Ambient Lighting Beams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/15 rounded-full blur-[160px] animate-ambient-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-700/10 rounded-full blur-[140px] animate-ambient-drift" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:2rem_2rem] opacity-30" />
      </div>

      {/* Editor Frame - Clean, Neat, Professional Luxury Aesthetics */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-zinc-800/90 bg-zinc-950/90 shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Animated Laser Beam Scanner when Compiling */}
        {isCompiling && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-beam-scan" />
          </div>
        )}

        {/* IDE Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/60 border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition cursor-pointer" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition cursor-pointer" />
            
            <div className="ml-3 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 flex items-center gap-2 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-zinc-200 font-medium">main.cpp</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSkip}
              className="text-xs text-zinc-400 hover:text-zinc-100 px-3 py-1 rounded-md hover:bg-zinc-800/80 transition flex items-center gap-1.5 font-mono cursor-pointer"
              title="Skip intro"
            >
              <FastForward className="w-3.5 h-3.5 text-zinc-400" />
              <span>Skip</span>
            </button>

            {/* Run Button */}
            <button
              onClick={handleCompileAndRun}
              disabled={isCompiling}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wide transition-all duration-200 cursor-pointer shadow-md ${
                isCompiling
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40 cursor-wait'
                  : isTypingDone
                  ? 'bg-white hover:bg-zinc-200 text-zinc-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
              }`}
            >
              {isCompiling ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                  <span>Running...</span>
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

        {/* Code Body - Neat, Clean, No Scrollbar */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed bg-[#09090c] text-zinc-200 overflow-x-hidden min-h-[290px] sm:min-h-[320px]">
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex items-start">
              <span className="w-8 shrink-0 text-zinc-600 select-none text-right pr-4 text-xs sm:text-sm pt-0.5 font-mono">
                {idx + 1}
              </span>
              <span className="flex-1 whitespace-pre-wrap break-words">
                {renderTokenizedLine(line)}
                {idx === currentLineIndex && !isTypingDone && (
                  <span className="inline-block w-2 h-4 bg-purple-400 ml-1 animate-pulse align-middle rounded-xs" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Compiler Status Notification Banner */}
        {isCompiling && (
          <div className="border-t border-zinc-800/80 bg-zinc-950 p-3.5 font-mono text-center animate-fadeIn">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-inner">
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-xs sm:text-sm font-medium text-zinc-200 tracking-wide">
                {compileMessage}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
