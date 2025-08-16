import React from 'react';
import { Terminal } from '../components/Terminal';
import { Sidebar } from '../components/Sidebar';
import { DocumentationPanel } from '../components/DocumentationPanel';
import { useAppStore } from '../store/useAppStore';

const Home: React.FC = () => {
  const { showDocumentation } = useAppStore();

  return (
    <div className="h-screen bg-gray-900 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar className="w-80 flex-shrink-0" />
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Terminal */}
        <div className={`flex-1 ${showDocumentation ? 'w-1/2' : 'w-full'} transition-all duration-300`}>
          <Terminal className="h-full" />
        </div>
        
        {/* Documentation Panel */}
        {showDocumentation && (
          <DocumentationPanel className="w-1/2 flex-shrink-0" />
        )}
      </div>
    </div>
  );
};

export default Home;