import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`wrapper ${isSidebarExpanded ? 'expanded' : ''}}`}>
      <div className={`sidebar ${isSidebarExpanded ? 'expanded' : ''}`} onClick={handleSidebarToggle}>
        <div class="icon">&#9776;</div>
        {isSidebarExpanded && (
          <div className="content">
            <ul>
            <li>Mon compte</li>
            <li>Incident</li>
            <li>Paramètres</li>
            </ul>
          </div>
        )}
      </div>
      {/* Contenu principal de votre application */}
    </div>
  );
}

export default App;