import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const ProfilePage: React.FC = () => {
  useEffect(() => {
    document.title = `Profile - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="profile" isAuthenticated />
      <main>
        <h1>Profile</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default ProfilePage;
