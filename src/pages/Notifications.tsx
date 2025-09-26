import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const NotificationsPage: React.FC = () => {
  useEffect(() => {
    document.title = `Notifications - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="notifications" />
      <main>
        <h1>Notifications</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default NotificationsPage;
