import React, { useEffect, useRef, useState } from 'react';
import { Play, Square, RotateCcw, Copy, Check } from 'lucide-react';
import { useAppStore, useTerminalState } from '../store/useAppStore';
import { Command } from '../data/commands';

interface TerminalProps {
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ className = '' }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const { output, isExecuting } = useTerminalState();
  const {
    selectedCommand,
    executeCommand,
    clearTerminal,
    addTerminalOutput
  } = useAppStore();

  // Auto scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  // Typing animation effect
  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    setTypingText('');
    
    for (let i = 0; i <= text.length; i++) {
      setTypingText(text.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    setIsTyping(false);
  };

  const handleRunCommand = async () => {
    if (!selectedCommand || isExecuting) return;
    
    // Simulate typing the command
    await simulateTyping(selectedCommand.example);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Execute the command
    await executeCommand(selectedCommand);
  };

  const handleCopyCommand = async () => {
    if (!selectedCommand) return;
    
    try {
      await navigator.clipboard.writeText(selectedCommand.example);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const formatOutput = (line: string) => {
    // Handle command prompts
    if (line.startsWith('$ ')) {
      return (
        <span>
          <span className="text-green-400">$ </span>
          <span className="text-white">{line.slice(2)}</span>
        </span>
      );
    }
    
    // Handle success messages
    if (line.includes('✅') || line.toLowerCase().includes('success')) {
      return <span className="text-green-400">{line}</span>;
    }
    
    // Handle warnings
    if (line.includes('⚠️') || line.toLowerCase().includes('warning')) {
      return <span className="text-yellow-400">{line}</span>;
    }
    
    // Handle errors
    if (line.toLowerCase().includes('error') || line.includes('❌')) {
      return <span className="text-red-400">{line}</span>;
    }
    
    // Handle file paths and code
    if (line.includes('/') || line.includes('.py') || line.includes('.js') || line.includes('.ts')) {
      return <span className="text-blue-400">{line}</span>;
    }
    
    // Default text
    return <span className="text-gray-300">{line}</span>;
  };

  return (
    <div className={`bg-gray-900 rounded-lg border border-gray-700 overflow-hidden ${className}`}>
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm ml-4">claude-tutorial — zsh — 80×24</span>
        </div>
        
        <div className="flex items-center space-x-2">
          {selectedCommand && (
            <>
              <button
                onClick={handleCopyCommand}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                title="Copy command"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
              
              <button
                onClick={handleRunCommand}
                disabled={isExecuting}
                className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded text-sm transition-colors"
                title="Run command"
              >
                {isExecuting ? (
                  <>
                    <Square size={14} />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Play size={14} />
                    <span>Run</span>
                  </>
                )}
              </button>
            </>
          )}
          
          <button
            onClick={clearTerminal}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title="Clear terminal"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 h-96 overflow-y-auto font-mono text-sm leading-relaxed bg-gray-900"
        style={{ fontFamily: 'Menlo, Monaco, "Courier New", monospace' }}
      >
        {/* Output lines */}
        {output.map((line, index) => (
          <div key={index} className="mb-1">
            {formatOutput(line)}
          </div>
        ))}
        
        {/* Typing animation */}
        {isTyping && (
          <div className="mb-1">
            <span className="text-green-400">$ </span>
            <span className="text-white">{typingText}</span>
            <span className="animate-pulse text-white">|</span>
          </div>
        )}
        
        {/* Current command prompt */}
        {!isExecuting && !isTyping && (
          <div className="flex items-center">
            <span className="text-green-400">$ </span>
            <span className="text-gray-500 ml-1">
              {selectedCommand ? 'Ready to run command...' : 'Select a command to get started'}
            </span>
          </div>
        )}
      </div>
      
      {/* Command Info Bar */}
      {selectedCommand && (
        <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Command:</span>
              <code className="text-blue-400 bg-gray-700 px-2 py-1 rounded">
                {selectedCommand.name}
              </code>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Category:</span>
              <span className="text-yellow-400 capitalize">{selectedCommand.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};