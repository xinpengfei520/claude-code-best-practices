import React from 'react';
import { ChevronRight, CheckCircle, Circle, RotateCcw, BookOpen } from 'lucide-react';
import { useAppStore, useProgress } from '../store/useAppStore';
import { categories, getDifficultyColor, getDifficultyLabel } from '../data/commands';
import { Command } from '../data/commands';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const {
    selectedCommand,
    selectedCategory,
    setSelectedCommand,
    setSelectedCategory,
    toggleDocumentation,
    showDocumentation,
    resetProgress
  } = useAppStore();
  
  const { completedCount, isCommandCompleted } = useProgress();
  const totalCommands = categories.reduce((sum, cat) => sum + cat.commands.length, 0);
  const progressPercentage = (completedCount / totalCommands) * 100;

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleCommandClick = (command: Command) => {
    setSelectedCommand(command);
  };

  const CommandItem: React.FC<{ command: Command }> = ({ command }) => {
    const isSelected = selectedCommand?.id === command.id;
    const isCompleted = isCommandCompleted(command.id);
    
    return (
      <div
        onClick={() => handleCommandClick(command)}
        className={`
          flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200
          ${isSelected 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'hover:bg-gray-700 text-gray-300 hover:text-white'
          }
        `}
      >
        <div className="flex-shrink-0">
          {isCompleted ? (
            <CheckCircle size={16} className="text-green-400" />
          ) : (
            <Circle size={16} className="text-gray-500" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium truncate">{command.name}</h4>
            <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(command.difficulty)} bg-opacity-20`}>
              {getDifficultyLabel(command.difficulty)}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
            {command.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-gray-800 border-r border-gray-700 flex flex-col ${className}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white">Claude Code Tutorial</h2>
          <button
            onClick={toggleDocumentation}
            className={`p-2 rounded-lg transition-colors ${
              showDocumentation 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-400 hover:text-white'
            }`}
            title="Toggle documentation"
          >
            <BookOpen size={16} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-white">{completedCount}/{totalCommands}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-400">
            {progressPercentage.toFixed(0)}% completed
          </div>
        </div>
        
        {/* Reset Progress Button */}
        {completedCount > 0 && (
          <button
            onClick={resetProgress}
            className="mt-3 w-full flex items-center justify-center space-x-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-colors text-sm"
          >
            <RotateCcw size={14} />
            <span>Reset Progress</span>
          </button>
        )}
      </div>

      {/* Categories and Commands */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {categories.map((category) => {
          const isExpanded = selectedCategory === category.id;
          const categoryCompleted = category.commands.filter(cmd => isCommandCompleted(cmd.id)).length;
          
          return (
            <div key={category.id} className="space-y-2">
              {/* Category Header */}
              <div
                onClick={() => handleCategoryClick(category.id)}
                className="flex items-center justify-between p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <h3 className="text-white font-medium">{category.name}</h3>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">
                    {categoryCompleted}/{category.commands.length}
                  </span>
                  <ChevronRight 
                    size={16} 
                    className={`text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>
              
              {/* Commands List */}
              {isExpanded && (
                <div className="space-y-2 ml-4">
                  {category.commands.map((command) => (
                    <CommandItem key={command.id} command={command} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-xs text-gray-400 text-center">
          <p>Interactive Claude Code Learning</p>
          <p className="mt-1">Select commands to practice</p>
        </div>
      </div>
    </div>
  );
};