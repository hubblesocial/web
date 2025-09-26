import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const SettingsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Settings - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="settings" isAuthenticated />
      <main>
        <h1>Settings</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default SettingsPage;
