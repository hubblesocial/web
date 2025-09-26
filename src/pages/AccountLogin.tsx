import React, { useEffect } from 'react';

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = `Login - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <main>
        <h1>Login</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default LoginPage;
