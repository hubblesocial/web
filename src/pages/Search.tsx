import React, { useEffect } from 'react';
import Sidebar from '../components/singles/Navbar';

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = `Search - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <Sidebar activeId="search" />
      <main>
        <h1>Search</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default SearchPage;
