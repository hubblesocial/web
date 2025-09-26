import React, { useEffect } from 'react';
import '../css/error.scss';
import '../css/buttons.scss';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HouseFill } from 'react-bootstrap-icons';

interface ErrorPageProps {
  code?: number;
  message?: string;
  logoSrc?: string;
  title?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  code = 404,
  message = 'Page Not Found',
  logoSrc = '/logo.png',
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${code} - Hubble`;
  }, [code]);

  return (
    <div className="err-container">
      <div className="err-hubble-logo">
        <img src={logoSrc} className="logo" alt={`Hubble Logo`} />
        <span>Hubble</span>
      </div>
      <h1 className="error-code">{code}</h1>
      <h3 className="error-msg">{message}</h3>

      <Button
        className="btn-primary-custom d-flex align-items-center justify-content-center"
        style={{ gap: '0.5rem', width: '100%', padding: '0.6rem 0.75rem', textAlign: 'center' }}
        onClick={() => navigate('/')}
      >
        <HouseFill size={20} />
        Return to Homepage
      </Button>
    </div>
  );
};

export default ErrorPage;
