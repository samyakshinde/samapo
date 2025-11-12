
import React, { useState } from 'react';
import Header from './components/Header';
import UserView from './components/UserView';
import DriverMode from './components/DriverMode';
import OwnerDashboard from './components/OwnerDashboard';
import { ViewMode } from './types';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.USER);

  const renderContent = () => {
    switch (viewMode) {
      case ViewMode.USER:
        return <UserView />;
      case ViewMode.DRIVER:
        return <DriverMode />;
      case ViewMode.OWNER:
        return <OwnerDashboard />;
      default:
        return <UserView />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      <Header currentView={viewMode} setView={setViewMode} />
      <main className="flex-grow flex flex-col">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
