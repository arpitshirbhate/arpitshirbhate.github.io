import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface CLIConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CLIConsole: React.FC<CLIConsoleProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to Arpit\'s Developer Console v1.4.0',
    'Type "help" to see available commands or "neofetch" for system details.',
    ''
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen, history]);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, `arpit@portfolio:~$ ${cmd}`];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  neofetch   - Display developer system metrics',
          '  about      - Display professional profile bio',
          '  skills     - List technology stack and competence',
          '  projects   - Show highlighted engineering projects',
          '  contact    - Print social platforms and contact coordinates',
          '  resume     - Open official PDF resume',
          '  clear      - Clear the console terminal screen',
          ''
        );
        break;
      case 'neofetch':
        newHistory.push(
          '   .-\x1b[32m/  /  \\\x1b[0m-.      \x1b[1m\x1b[32marpit@portfolio\x1b[0m',
          '  /  \x1b[32m/    /  \x1b[0m\\     --------------',
          ' |   \x1b[32m\\    /   \x1b[0m|    \x1b[32mOS\x1b[0m: Windows 11 x86_64 / Web Environment',
          ' |    \x1b[36m\\  /    \x1b[0m|    \x1b[32mHost\x1b[0m: React-Vite-TypeScript-Core v5',
          '  \\    \x1b[36m\\/    \x1b[0m/     \x1b[32mKernel\x1b[0m: Vercel-Platform-Engine v1',
          '   \'-\x1b[36m\\______/\x1b[0m\'      \x1b[32mUptime\x1b[0m: Active / 24-7 availability',
          '                   \x1b[32mShell\x1b[0m: Antigravity-Term-CLI v1.4',
          '                   \x1b[32mFocus\x1b[0m: Data Science | ML | Web Dev | Java Platform',
          '                   \x1b[32mStatus\x1b[0m: Actively seeking elite internship roles',
          ''
        );
        break;
      case 'about':
        newHistory.push(
          'About Arpit Shirbhate:',
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
          '  [Data Science & ML]  - Python, NumPy, Pandas, Scikit-Learn, PyTorch',
          '  [Core Engineering]  - Java, OOPs, Data Structures & Algorithms, SQL',
          '  [Web Development]    - HTML5, CSS3, JavaScript, TypeScript, React.js, Tailwind CSS',
          '  [Developer Tools]   - Git & GitHub, Linux Core, VS Code, IntelliJ IDEA',
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
          '  Email    : arpit.shirbhate.dev@gmail.com (mock-up placeholder)',
          '  GitHub   : https://github.com/arpit-shirbhate',
          '  LinkedIn : https://linkedin.com/in/arpit-shirbhate',
          ''
        );
        break;
      case 'resume':
        newHistory.push('Opening official resume PDF in a new window tab...');
        window.open('#', '_blank'); // Mock PDF opener
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
      <div 
        className={`glass-card rounded-xl border border-zinc-800 flex flex-col transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-3xl h-[450px]'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-800 rounded-t-xl select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-zinc-300 font-semibold">terminal@arpit-portfolio: ~</span>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMaximized(!isMaximized)} 
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
              title={isMaximized ? 'Minimize' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button 
              onClick={onClose} 
              className="p-1 rounded bg-zinc-800/50 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-all"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Screen */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-zinc-300 select-text leading-relaxed">
          {history.map((line, index) => {
            // Apply simple coloring for neofetch strings
            if (line.includes('arpit@portfolio:~$')) {
              return (
                <div key={index} className="text-emerald-400 font-bold mb-1">
                  {line}
                </div>
              );
            }
            // Parse custom colored terminals
            if (line.includes('\x1b[')) {
              // Custom simple parser for local ASCI/neofetch color styling tags
              const cleaned = line
                .replace(/\x1b\[32m/g, '##GREEN##')
                .replace(/\x1b\[36m/g, '##CYAN##')
                .replace(/\x1b\[1m/g, '##BOLD##')
                .replace(/\x1b\[0m/g, '##RESET##');
              
              const parts = cleaned.split(/(##.*?##)/);
              let isGreen = false;
              let isCyan = false;
              let isBold = false;

              return (
                <div key={index} className="whitespace-pre">
                  {parts.map((p, idx) => {
                    if (p === '##GREEN##') { isGreen = true; return null; }
                    if (p === '##CYAN##') { isCyan = true; return null; }
                    if (p === '##BOLD##') { isBold = true; return null; }
                    if (p === '##RESET##') { isGreen = false; isCyan = false; isBold = false; return null; }
                    
                    let cls = '';
                    if (isGreen) cls += ' text-emerald-400';
                    if (isCyan) cls += ' text-cyan-400';
                    if (isBold) cls += ' font-bold';
                    return <span key={idx} className={cls}>{p}</span>;
                  })}
                </div>
              );
            }
            return <div key={index} className="whitespace-pre-wrap">{line}</div>;
          })}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950/80 border-t border-zinc-900/60 rounded-b-xl">
          <span className="font-mono text-emerald-400 text-sm font-bold select-none">arpit@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-emerald-400 caret-emerald-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
