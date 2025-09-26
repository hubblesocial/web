import React, { useEffect } from 'react';

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = `Register - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <main>
        <h1>Register</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default RegisterPage;
