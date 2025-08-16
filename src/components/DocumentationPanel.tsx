import React from 'react';
import { X, BookOpen, AlertTriangle, Lightbulb, Link, Code, Play } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { getDifficultyColor, getDifficultyLabel } from '../data/commands';

interface DocumentationPanelProps {
  className?: string;
}

export const DocumentationPanel: React.FC<DocumentationPanelProps> = ({ className = '' }) => {
  const { selectedCommand, showDocumentation, toggleDocumentation, executeCommand } = useAppStore();

  if (!showDocumentation) {
    return null;
  }

  if (!selectedCommand) {
    return (
      <div className={`bg-gray-800 border-l border-gray-700 flex flex-col ${className}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <BookOpen size={20} className="text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Documentation</h2>
          </div>
          <button
            onClick={toggleDocumentation}
            className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center text-gray-400">
            <BookOpen size={48} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-lg font-medium mb-2">Select a Command</h3>
            <p className="text-sm">Choose a command from the sidebar to view its documentation and best practices.</p>
          </div>
        </div>
      </div>
    );
  }

  const handleExecuteCommand = () => {
    executeCommand(selectedCommand);
  };

  return (
    <div className={`bg-gray-800 border-l border-gray-700 flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <BookOpen size={20} className="text-blue-400" />
          <h2 className="text-lg font-semibold text-white">Documentation</h2>
        </div>
        <button
          onClick={toggleDocumentation}
          className="p-1 hover:bg-gray-700 rounded text-gray-400 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Command Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{selectedCommand.name}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedCommand.difficulty)} bg-opacity-20`}>
              {getDifficultyLabel(selectedCommand.difficulty)}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">{selectedCommand.description}</p>
        </div>

        {/* Syntax */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Code size={18} className="text-green-400" />
            <h4 className="text-lg font-semibold text-white">Syntax</h4>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <code className="text-green-400 font-mono text-sm">{selectedCommand.syntax}</code>
          </div>
        </div>

        {/* Example */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Play size={18} className="text-blue-400" />
              <h4 className="text-lg font-semibold text-white">Example</h4>
            </div>
            <button
              onClick={handleExecuteCommand}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors flex items-center space-x-1"
            >
              <Play size={12} />
              <span>Try it</span>
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <code className="text-blue-400 font-mono text-sm whitespace-pre-wrap">{selectedCommand.example}</code>
          </div>
        </div>

        {/* Expected Output */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-white">Expected Output</h4>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{selectedCommand.output}</pre>
          </div>
        </div>

        {/* Best Practices */}
        {selectedCommand.bestPractices && selectedCommand.bestPractices.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Lightbulb size={18} className="text-yellow-400" />
              <h4 className="text-lg font-semibold text-white">Best Practices</h4>
            </div>
            <div className="space-y-2">
              {selectedCommand.bestPractices.map((practice, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-900 bg-opacity-20 rounded-lg border border-yellow-700 border-opacity-30">
                  <Lightbulb size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-100 text-sm leading-relaxed">{practice}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Mistakes */}
        {selectedCommand.commonMistakes && selectedCommand.commonMistakes.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle size={18} className="text-red-400" />
              <h4 className="text-lg font-semibold text-white">Common Mistakes</h4>
            </div>
            <div className="space-y-2">
              {selectedCommand.commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-red-900 bg-opacity-20 rounded-lg border border-red-700 border-opacity-30">
                  <AlertTriangle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-red-100 text-sm leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Commands */}
        {selectedCommand.relatedCommands && selectedCommand.relatedCommands.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Link size={18} className="text-purple-400" />
              <h4 className="text-lg font-semibold text-white">Related Commands</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedCommand.relatedCommands.map((relatedId, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-purple-900 bg-opacity-30 text-purple-300 text-sm rounded-full border border-purple-700 border-opacity-50"
                >
                  {relatedId}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          <p>💡 Tip: Use the "Try it" button to execute commands in the terminal</p>
        </div>
      </div>
    </div>
  );
};