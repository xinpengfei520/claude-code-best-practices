import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Command, CommandCategory } from '../data/commands';

export interface ExecutionHistory {
  id: string;
  command: Command;
  timestamp: Date;
  output: string;
}

export interface AppState {
  // Current state
  selectedCommand: Command | null;
  selectedCategory: string | null;
  isExecuting: boolean;
  showDocumentation: boolean;
  
  // History and progress
  executionHistory: ExecutionHistory[];
  completedCommands: Set<string>;
  
  // Terminal state
  terminalOutput: string[];
  currentInput: string;
  
  // Actions
  setSelectedCommand: (command: Command | null) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  executeCommand: (command: Command) => Promise<void>;
  addToHistory: (command: Command, output: string) => void;
  markCommandCompleted: (commandId: string) => void;
  toggleDocumentation: () => void;
  clearTerminal: () => void;
  addTerminalOutput: (output: string) => void;
  setCurrentInput: (input: string) => void;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(persist(
  (set, get) => ({
    // Initial state
    selectedCommand: null,
    selectedCategory: null,
    isExecuting: false,
    showDocumentation: true,
    executionHistory: [],
    completedCommands: new Set(),
    terminalOutput: [
      'Welcome to Claude Code Tutorial! 🚀',
      'Select a command from the sidebar to get started.',
      ''
    ],
    currentInput: '',

    // Actions
    setSelectedCommand: (command) => {
      set({ selectedCommand: command });
      if (command) {
        get().addTerminalOutput(`$ ${command.example}`);
      }
    },

    setSelectedCategory: (categoryId) => {
      set({ selectedCategory: categoryId });
    },

    executeCommand: async (command) => {
      const { addToHistory, addTerminalOutput, markCommandCompleted } = get();
      
      set({ isExecuting: true });
      
      try {
        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Add command output
        addTerminalOutput(command.output);
        addTerminalOutput('');
        
        // Add to history and mark as completed
        addToHistory(command, command.output);
        markCommandCompleted(command.id);
        
      } catch (error) {
        addTerminalOutput(`Error: ${error}`);
        addTerminalOutput('');
      } finally {
        set({ isExecuting: false });
      }
    },

    addToHistory: (command, output) => {
      const newEntry: ExecutionHistory = {
        id: `${command.id}-${Date.now()}`,
        command,
        timestamp: new Date(),
        output
      };
      
      set(state => ({
        executionHistory: [newEntry, ...state.executionHistory].slice(0, 50) // Keep last 50 entries
      }));
    },

    markCommandCompleted: (commandId) => {
      set(state => ({
        completedCommands: new Set([...state.completedCommands, commandId])
      }));
    },

    toggleDocumentation: () => {
      set(state => ({ showDocumentation: !state.showDocumentation }));
    },

    clearTerminal: () => {
      set({
        terminalOutput: [
          'Terminal cleared.',
          'Welcome to Claude Code Tutorial! 🚀',
          ''
        ]
      });
    },

    addTerminalOutput: (output) => {
      set(state => ({
        terminalOutput: [...state.terminalOutput, output]
      }));
    },

    setCurrentInput: (input) => {
      set({ currentInput: input });
    },

    resetProgress: () => {
      set({
        executionHistory: [],
        completedCommands: new Set(),
        terminalOutput: [
          'Progress reset.',
          'Welcome to Claude Code Tutorial! 🚀',
          'Select a command from the sidebar to get started.',
          ''
        ]
      });
    }
  }),
  {
    name: 'claude-tutorial-storage',
    partialize: (state) => ({
      executionHistory: state.executionHistory,
      completedCommands: Array.from(state.completedCommands), // Convert Set to Array for serialization
      selectedCategory: state.selectedCategory,
      showDocumentation: state.showDocumentation
    }),
    onRehydrateStorage: () => (state) => {
      if (state && Array.isArray(state.completedCommands)) {
        // Convert Array back to Set after rehydration
        state.completedCommands = new Set(state.completedCommands);
      }
    }
  }
));

// Selectors for computed values
export const useProgress = () => {
  const completedCommands = useAppStore(state => state.completedCommands);
  return {
    completedCount: completedCommands.size,
    isCommandCompleted: (commandId: string) => completedCommands.has(commandId)
  };
};

export const useTerminalState = () => {
  const output = useAppStore(state => state.terminalOutput);
  const currentInput = useAppStore(state => state.currentInput);
  const isExecuting = useAppStore(state => state.isExecuting);
  
  return {
    output,
    currentInput,
    isExecuting
  };
};