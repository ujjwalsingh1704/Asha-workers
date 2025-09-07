import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import PatientEntry from './Components/PatientEntry';
import FollowUps from './Components/FollowUps';
import HealthSchemes from './Components/HealthSchemes';
import Insurance from './Components/Insurance';
import VoiceAssistant from './Components/VoiceAssistant';
import Login from './Components/Login';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'patients':
        return <PatientEntry onBack={() => setCurrentPage('dashboard')} />;
      case 'followups':
        return <FollowUps onBack={() => setCurrentPage('dashboard')} />;
      case 'schemes':
        return <HealthSchemes onBack={() => setCurrentPage('dashboard')} />;
      case 'insurance':
        return <Insurance onBack={() => setCurrentPage('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen">
      {renderCurrentPage()}
      <VoiceAssistant 
        isActive={isVoiceActive} 
        onToggle={setIsVoiceActive}
      />
    </div>
  );
}

export default App;