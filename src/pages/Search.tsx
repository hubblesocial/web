import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = `Search - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="search" isAuthenticated />
      <main>
        <h1>Search</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default SearchPage;
