import React, { useEffect } from 'react';

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = `Login - Hubble`;
  }, []);

  return (
    <div className="app-container">
      <main>
        <h1>Login</h1>
        <p>Welcome to Hubble!</p>
      </main>
    </div>
  );
};

export default LoginPage;
