import React, { useEffect } from 'react';

const RegisterPage: React.FC = () => {
  useEffect(() => {
    document.title = `Register - Axioris`;
  }, []);

  return (
    <div className="app-container">
      <main>
        <h1>Register</h1>
        <p>Welcome to Axioris!</p>
      </main>
    </div>
  );
};

export default RegisterPage;
