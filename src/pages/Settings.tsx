import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const SettingsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Settings - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="settings" isAuthenticated />
      <main>
        <h1>Settings</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default SettingsPage;
