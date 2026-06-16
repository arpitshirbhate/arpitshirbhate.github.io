import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Trash2, ChevronRight, ExternalLink } from 'lucide-react';

interface CLIConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_COMMANDS = ['help', 'neofetch', 'about', 'skills', 'projects', 'contact', 'clear'];

export const CLIConsole: React.FC<CLIConsoleProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to  Console v1.5.0',
    'Type "help" to see available commands or click the buttons below to execute them.',
    ''
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lowerCmd = trimmed.toLowerCase();
    const newHistory = [...history, `arpit@portfolio:~$ ${trimmed}`];

    switch (lowerCmd) {
      case 'help':
        newHistory.push(
          '🔧 AVAILABLE ACTIONS:',
          '  neofetch   → Display developer system metrics & hardware',
          '  about      → Display professional profile bio',
          '  skills     → List technology stack and competence',
          '  projects   → Show highlighted engineering projects',
          '  contact    → Print social platforms & contact coordinates',
          '  resume     → Open official PDF resume',
          '  clear      → Clear the terminal screen',
          ''
        );
        break;
      case 'neofetch':
        newHistory.push(
          '   .-\x1b[32m/  /  \\\x1b[0m-.      \x1b[1m\x1b[32marpit@portfolio\x1b[0m',
          '  /  \x1b[32m/    /  \x1b[0m\\     --------------',
          ' |   \x1b[32m\\    /   \x1b[0m|    \x1b[32mOS\x1b[0m: Windows 11 x86_64 / Web Environment',
          ' |    \x1b[36m\\  /    \x1b[0m|    \x1b[32mHost\x1b[0m: React-Vite-Core v5',
          '  \\    \x1b[36m\\/    \x1b[0m/     \x1b[32mKernel\x1b[0m: Vercel-Platform-Engine v1',
          '   \'-\x1b[36m\\______/\x1b[0m\'      \x1b[32mUptime\x1b[0m: Active / 24-7 availability',
          '                   \x1b[32mShell\x1b[0m: Unknown',
          '                   \x1b[32mFocus\x1b[0m: Data Science | ML | Web Dev | Java Platform',
          '                   \x1b[32mStatus\x1b[0m: Actively seeking internship roles',
          '                   \x1b[32mPalette\x1b[0m: █\x1b[31m█\x1b[32m█\x1b[33m█\x1b[34m█\x1b[35m█\x1b[36m█\x1b[37m█',
          ''
        );
        break;
      case 'about':
        newHistory.push(
          '👤 ABOUT ARPIT SHIRBHATE:',
          '  I am a passionate Computer Science student dedicated to creating elegant, performant,',
          '  and highly scalable applications. I bridge the gap between high-level Machine Learning',
          '  models and beautiful, interactive frontend UIs.',
          '  Current Focus: Advanced Algorithms in Java, Machine Learning modeling, and React Web Architecture.',
          ''
        );
        break;
      case 'skills':
        newHistory.push(
          '🚀 TECHNICAL STACK MATRIX:',
          '  [Data Science & ML]  → Python, NumPy, Pandas, Scikit-Learn, PyTorch',
          '  [Core Engineering]  → Java, OOPs, Data Structures & Algorithms, SQL',
          '  [Web Development]    → HTML5, CSS3, JavaScript, TypeScript, React.js, Tailwind CSS',
          '  [Developer Tools]   → Git & GitHub, Linux Core, VS Code, IntelliJ IDEA',
          ''
        );
        break;
      case 'projects':
        newHistory.push(
          '📂 FEATURED PROJECTS:',
          '  1. Prompt Craft - Multi-LLM prompt optimization tool.',
          '  2. GitHub Developer Popularity Predictor - XGBoost ML classifier predicting impact tiers.',
          '  3. Customer Churn Prediction Model - End-to-end ML model predicting telecom customer churn.',
          '  4. IoT Fire-Fighting Robot - Fire detection & actuator embedded systems.',
          '  Type "resume" to access full detail descriptions on active deployments!',
          ''
        );
        break;
      case 'contact':
        newHistory.push(
          '📞 CONTACT COORDINATES:',
          '  Email    → arpitshirbhate4@gmail.com',
          '  GitHub   → https://github.com/arpit2006',
          '  LinkedIn → https://linkedin.com/in/arpit-shirbhate',
          ''
        );
        break;
      case 'resume':
        newHistory.push('Opening official resume PDF in a new window tab...');
        window.open('#', '_blank');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push(`Command not found: "${cmd}". Type "help" for a list of available actions.`);
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const parseAnsiLine = (line: string) => {
    const parts = line.split(/(\x1b\[\d+m)/);
    let isGreen = false;
    let isCyan = false;
    let isRed = false;
    let isYellow = false;
    let isBlue = false;
    let isMagenta = false;
    let isBold = false;

    return (
      <div className="whitespace-pre min-h-[1.25rem]">
        {parts.map((part, idx) => {
          if (part.startsWith('\x1b[')) {
            const code = part.slice(2, -1);
            if (code === '0') {
              isGreen = false;
              isCyan = false;
              isRed = false;
              isYellow = false;
              isBlue = false;
              isMagenta = false;
              isBold = false;
            } else if (code === '1') {
              isBold = true;
            } else if (code === '31') {
              isRed = true;
            } else if (code === '32') {
              isGreen = true;
            } else if (code === '33') {
              isYellow = true;
            } else if (code === '34') {
              isBlue = true;
            } else if (code === '35') {
              isMagenta = true;
            } else if (code === '36') {
              isCyan = true;
            }
            return null;
          }

          let cls = '';
          if (isRed) cls += ' text-rose-400';
          if (isGreen) cls += ' text-emerald-400';
          if (isYellow) cls += ' text-amber-400';
          if (isBlue) cls += ' text-blue-400';
          if (isMagenta) cls += ' text-purple-400';
          if (isCyan) cls += ' text-cyan-400';
          if (isBold) cls += ' font-bold';

          return <span key={idx} className={cls}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 12, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
            className={`glass-card rounded-xl border border-zinc-800/80 flex flex-col transition-all duration-300 shadow-[0_0_50px_-12px_rgba(16,185,129,0.15)] overflow-hidden ${
              isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[480px]'
            }`}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal Header */}
            <div className="relative flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800 select-none">
              {/* macOS Window Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors flex items-center justify-center group"
                  title="Close"
                >
                  <X className="w-1.5 h-1.5 text-rose-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors flex items-center justify-center group"
                  title="Toggle Size"
                >
                  <span className="w-1.5 h-[1px] bg-amber-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors flex items-center justify-center group"
                  title="Maximize"
                >
                  <Maximize2 className="w-1.5 h-1.5 text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>

              {/* Title in center */}
              <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-mono text-zinc-400 font-semibold tracking-wide">bash • arpit@portfolio:~</span>
              </div>

              {/* Status indicator badge */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-mono text-emerald-400/80 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                  online
                </span>
              </div>
            </div>

            {/* Terminal Screen / History */}
            <div className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm text-zinc-300 select-text leading-relaxed bg-zinc-950/40">
              {history.map((line, index) => {
                // Style user command prompt line
                if (line.includes('arpit@portfolio:~$')) {
                  return (
                    <div key={index} className="text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500/60" />
                      {line}
                    </div>
                  );
                }

                // Styled Category Headers in command outputs
                if (
                  line.startsWith('🔧') ||
                  line.startsWith('👤') ||
                  line.startsWith('🚀') ||
                  line.startsWith('📂') ||
                  line.startsWith('📞') ||
                  line.startsWith('Welcome') ||
                  line.startsWith('Type "help"')
                ) {
                  let colorClass = 'text-white font-bold mt-2 mb-1';
                  if (line.startsWith('Welcome')) {
                    colorClass = 'text-emerald-400 font-bold text-sm sm:text-base mb-1';
                  } else if (line.startsWith('Type "help"')) {
                    colorClass = 'text-zinc-500 text-xs italic mb-4';
                  }
                  return (
                    <div key={index} className={`${colorClass} whitespace-pre-wrap`}>
                      {line}
                    </div>
                  );
                }

                // Parse standard ANSI style line
                if (line.includes('\x1b[')) {
                  return <React.Fragment key={index}>{parseAnsiLine(line)}</React.Fragment>;
                }

                return (
                  <div key={index} className="whitespace-pre-wrap text-zinc-400 pl-4 py-0.5 border-l border-zinc-900 hover:border-zinc-800 transition-colors">
                    {line}
                  </div>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Suggested Command Pills Bar */}
            <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-zinc-900/40 border-t border-zinc-900/60 select-none">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mr-1">Quick Run:</span>
              {SUGGESTED_COMMANDS.map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-zinc-950 border border-zinc-900 hover:border-emerald-500/20 hover:bg-emerald-500/5 text-[10px] sm:text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-all cursor-pointer flex items-center gap-0.5"
                >
                  {cmd === 'clear' ? <Trash2 className="w-2.5 h-2.5" /> : cmd === 'resume' ? <ExternalLink className="w-2.5 h-2.5" /> : null}
                  <span>{cmd}</span>
                </button>
              ))}
            </div>

            {/* Terminal Input Line */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-t border-zinc-900/60">
              <span className="font-mono text-emerald-500 text-xs sm:text-sm font-extrabold select-none flex items-center gap-1">
                arpit@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-emerald-400 caret-emerald-400 placeholder-emerald-950/60"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help' or click a command above..."
                autoFocus
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
