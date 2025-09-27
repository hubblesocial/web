import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const ProfilePage: React.FC = () => {
  useEffect(() => {
    document.title = `Profile - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="profile" />
      <main>
        <h1>Profile</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default ProfilePage;
