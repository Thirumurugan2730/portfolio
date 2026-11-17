import React, { useState, useEffect, useRef } from 'react';
import { Play, FastForward, Sparkles, Heart } from 'lucide-react';

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

  // Fast & energetic typing effect
  useEffect(() => {
    if (currentLineIndex >= CPP_CODE_LINES.length) {
      setIsTypingDone(true);
      // No pause: immediately compile and run right after code is typed!
      timerRef.current = setTimeout(() => {
        handleCompileAndRun();
      }, 150);
      return;
    }

    const targetLine = CPP_CODE_LINES[currentLineIndex];

    if (currentCharIndex < targetLine.length) {
      // Fast typing speed: 14ms to 24ms per character
      const speed = targetLine.length === 0 ? 20 : Math.floor(Math.random() * 10) + 14;
      timerRef.current = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[currentLineIndex] = targetLine.slice(0, currentCharIndex + 1);
          return next;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, speed);
    } else {
      // Snappy line switch
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

    // Show full code immediately
    setDisplayedLines(CPP_CODE_LINES);
    setIsTypingDone(true);

    // Immediate compile message
    setCompileMessage("🚀 Leading you into Thiru's World...");

    // Swift, seamless transition
    setTimeout(() => {
      setCompileMessage("✨ Welcome to Thiru's World!");
    }, 700);

    // Transition straight into the portfolio homepage
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onComplete();
      }, 350);
    }, 1200);
  };

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 100);
  };

  // Pure Left-to-Right Tokenizer (Never pre-renders quotes or future words)
  const renderTokenizedLine = (text: string) => {
    if (!text) return <span>&nbsp;</span>;

    const tokens: React.ReactNode[] = [];
    let i = 0;
    while (i < text.length) {
      // Whitespace
      if (text[i] === ' ') {
        tokens.push(<span key={i}> </span>);
        i++;
        continue;
      }

      // #include directive
      if (text.startsWith('#include', i)) {
        tokens.push(<span key={i} className="text-pink-400 font-bold">#include</span>);
        i += 8;
        continue;
      }

      // Header files: <iostream>, <dedication>, <compassion>, <passion>
      if (text[i] === '<') {
        const end = text.indexOf('>', i);
        if (end !== -1) {
          const content = text.slice(i, end + 1);
          const isSpecialImport = content.includes('dedication') || content.includes('compassion') || content.includes('passion');
          tokens.push(
            <span key={i} className={`font-semibold ${isSpecialImport ? 'text-amber-300' : 'text-emerald-400'}`}>
              {content}
            </span>
          );
          i = end + 1;
        } else {
          tokens.push(<span key={i} className="text-emerald-400 font-semibold">{text.slice(i)}</span>);
          break;
        }
        continue;
      }

      // String literal "..." - strictly renders ONLY characters typed so far
      if (text[i] === '"') {
        const end = text.indexOf('"', i + 1);
        if (end !== -1) {
          tokens.push(
            <span key={i} className="text-emerald-300 font-semibold bg-emerald-950/40 px-1 py-0.5 rounded">
              {text.slice(i, end + 1)}
            </span>
          );
          i = end + 1;
        } else {
          tokens.push(
            <span key={i} className="text-emerald-300 font-semibold bg-emerald-950/40 px-1 py-0.5 rounded">
              {text.slice(i)}
            </span>
          );
          break;
        }
        continue;
      }

      // Operator <<
      if (text.startsWith('<<', i)) {
        tokens.push(<span key={i} className="text-rose-400 font-bold">&lt;&lt;</span>);
        i += 2;
        continue;
      }

      // Scope operator ::
      if (text.startsWith('::', i)) {
        tokens.push(<span key={i} className="text-purple-300 font-bold">::</span>);
        i += 2;
        continue;
      }

      // Keyword: int
      if (text.startsWith('int', i) && (i + 3 === text.length || /[\s(]/.test(text[i + 3]))) {
        tokens.push(<span key={i} className="text-fuchsia-400 font-bold">int</span>);
        i += 3;
        continue;
      }

      // Identifier: main
      if (text.startsWith('main', i) && (i + 4 === text.length || /[\s(]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-amber-300 font-bold">main</span>);
        i += 4;
        continue;
      }

      // Namespace: std
      if (text.startsWith('std', i) && (i + 3 === text.length || text.startsWith('::', i + 3))) {
        tokens.push(<span key={i} className="text-purple-400 font-bold">std</span>);
        i += 3;
        continue;
      }

      // Stream: cout
      if (text.startsWith('cout', i) && (i + 4 === text.length || /[\s<]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-amber-300 font-bold">cout</span>);
        i += 4;
        continue;
      }

      // Stream: endl
      if (text.startsWith('endl', i) && (i + 4 === text.length || /[\s;]/.test(text[i + 4]))) {
        tokens.push(<span key={i} className="text-amber-300 font-bold">endl</span>);
        i += 4;
        continue;
      }

      // Keyword: return
      if (text.startsWith('return', i) && (i + 6 === text.length || /\s/.test(text[i + 6]))) {
        tokens.push(<span key={i} className="text-pink-400 font-bold">return</span>);
        i += 6;
        continue;
      }

      // Number 0
      if (text[i] === '0' && (i === 0 || /\s/.test(text[i - 1])) && (i + 1 === text.length || /;/.test(text[i + 1]))) {
        tokens.push(<span key={i} className="text-amber-400 font-bold">0</span>);
        i++;
        continue;
      }

      // Delimiters
      if ('{}();'.includes(text[i])) {
        tokens.push(<span key={i} className="text-purple-300 font-semibold">{text[i]}</span>);
        i++;
        continue;
      }

      // Generic character
      tokens.push(<span key={i} className="text-slate-100">{text[i]}</span>);
      i++;
    }

    return <>{tokens}</>;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#09080e] transition-all duration-400 overflow-hidden ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Vibrant Multi-Color Background Aura (Zero Blue) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-600/25 via-pink-600/20 to-purple-800/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-amber-600/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e11d4810_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-60" />
      </div>

      {/* Compiler Container - Bigger, Vibrant Gradient Border, Zero Scrollbar */}
      <div className="relative w-full max-w-5xl rounded-3xl p-[2.5px] bg-gradient-to-r from-pink-500 via-purple-500 via-amber-400 to-emerald-400 shadow-[0_0_60px_rgba(217,70,239,0.35)] transition-all duration-300">
        <div className="w-full rounded-[22px] bg-[#0f0d17]/95 backdrop-blur-2xl flex flex-col overflow-hidden">
          
          {/* Top IDE Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a0812] border-b border-purple-500/20">
            {/* Window control buttons */}
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50 hover:scale-110 transition cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 hover:scale-110 transition cursor-pointer" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 hover:scale-110 transition cursor-pointer" />
              
              {/* File tab */}
              <div className="ml-3 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center gap-2 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-300 font-bold">main.cpp</span>
                <span className="text-pink-400 text-[10px] uppercase font-bold tracking-wider">C++</span>
              </div>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSkip}
                className="text-xs text-slate-400 hover:text-pink-300 px-3 py-1.5 rounded-lg hover:bg-purple-900/30 transition flex items-center gap-1.5 font-mono cursor-pointer"
                title="Skip to portfolio"
              >
                <FastForward className="w-3.5 h-3.5 text-pink-400" />
                <span>Skip</span>
              </button>

              {/* Compile & Run Button */}
              <button
                onClick={handleCompileAndRun}
                disabled={isCompiling}
                className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-wide transition-all duration-200 shadow-lg cursor-pointer ${
                  isCompiling
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-rose-500/40 cursor-wait'
                    : isTypingDone
                    ? 'bg-gradient-to-r from-amber-500 via-rose-500 to-fuchsia-600 hover:brightness-110 text-white shadow-rose-500/40 scale-105 animate-pulse'
                    : 'bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:brightness-110 text-white shadow-purple-600/30'
                }`}
              >
                {isCompiling ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Compiling...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-amber-200" />
                    <span>Compile & Run</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Editor Body - ZERO HORIZONTAL SCROLLBAR, Fast Natural Typing */}
          <div className="p-6 sm:p-8 font-mono text-sm sm:text-base lg:text-lg leading-relaxed bg-[#0c0a14] text-slate-100 overflow-x-hidden min-h-[300px] sm:min-h-[340px]">
            {displayedLines.map((line, idx) => (
              <div key={idx} className="flex items-start group">
                <span className="w-10 shrink-0 text-slate-600 select-none text-right pr-4 text-xs sm:text-sm pt-0.5 font-mono group-hover:text-purple-400 transition-colors">
                  {idx + 1}
                </span>
                <span className="flex-1 whitespace-pre-wrap break-words">
                  {renderTokenizedLine(line)}
                  {idx === currentLineIndex && !isTypingDone && (
                    <span className="inline-block w-2.5 h-5 bg-gradient-to-b from-pink-400 to-amber-400 ml-1 animate-pulse align-middle rounded-sm shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Compiler Status Banner - "Leading you into Thiru's World" */}
          {isCompiling && (
            <div className="border-t-2 border-purple-500/30 bg-[#07060c] p-4 sm:p-5 font-mono text-center overflow-hidden animate-fadeIn">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-purple-950/80 via-rose-950/80 to-amber-950/80 border border-rose-500/40 shadow-xl shadow-fuchsia-950/50">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '2s' }} />
                <span className="text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-emerald-300 tracking-wide">
                  {compileMessage}
                </span>
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>
              
              {/* Progress bar line */}
              <div className="w-full max-w-md mx-auto mt-3 h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 via-amber-400 to-emerald-400 animate-pulse rounded-full" />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
