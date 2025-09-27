import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `Home - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="home" />
      <main>
        <h1>Home</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default HomePage;
