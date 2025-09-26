import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `Home - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="home" isAuthenticated />
      <main>
        <h1>Home</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default HomePage;
