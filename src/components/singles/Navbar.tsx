import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Button } from 'react-bootstrap';
import {
  HouseFill,
  Search,
  PersonCircle,
  Feather,
  BoxArrowInRight,
  PersonPlus,
  BellFill,
  GearFill,
} from 'react-bootstrap-icons';
import '../../css/navbar.scss';

interface NavbarProps {
  activeId?: 'home' | 'search' | 'notifications' | 'profile' | 'settings';
  isAuthenticated?: boolean;
}

const navItems = [
  { id: 'home', to: '/', icon: <HouseFill size={20} className="me-2" />, label: 'Home' },
  { id: 'search', to: '/search', icon: <Search size={20} className="me-2" />, label: 'Search' },
  { id: 'notifications', to: '/notifications', icon: <BellFill size={20} className="me-2" />, label: 'Notifications' },
  { id: 'profile', to: '/user/me', icon: <PersonCircle size={20} className="me-2" />, label: 'Profile' },
  { id: 'settings', to: '/settings', icon: <GearFill size={20} className="me-2" />, label: 'Settings' },
] as const;

const Sidebar: React.FC<NavbarProps> = ({
  activeId = 'home',
  isAuthenticated = false,
}) => (
  <nav className="sidebar d-flex flex-column p-2">
    <div className="brand mb-3">
      <LinkContainer to="/">
        <Nav.Link className="brand-link d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Axioris Logo"
            className="brand-logo"
          />
          <span className="brand-text">Axioris</span>
        </Nav.Link>
      </LinkContainer>
    </div>

    <div className="top flex-grow-1">
      <Nav className="flex-column nav-vertical">
        {navItems.map(({ id, to, icon, label }) => (
          <LinkContainer key={id} to={to}>
            <Nav.Link className={activeId === id ? 'active' : ''}>
              {React.cloneElement(icon, { style: { marginRight: '0.75rem' } })}
              {label}
            </Nav.Link>
          </LinkContainer>
        ))}
      </Nav>
    </div>

    <div className="bottom mt-auto d-flex flex-column gap-2">
      {isAuthenticated ? (
        <LinkContainer to="/post/create">
          <Button
            variant="primary"
            className="create-thread-btn d-flex align-items-center justify-content-center w-100"
          >
            <Feather size={20} style={{ marginRight: '0.6rem' }} />
            Create Thread
          </Button>
        </LinkContainer>
      ) : (
        <>
          <LinkContainer to="/account/login">
            <Button
              variant="outline-primary"
              className="login-btn d-flex align-items-center justify-content-center w-100"
            >
              <BoxArrowInRight size={20} className="me-2" />
              Login
            </Button>
          </LinkContainer>
          <LinkContainer to="/account/register">
            <Button
              variant="primary"
              className="signup-btn d-flex align-items-center justify-content-center w-100"
            >
              <PersonPlus size={20} className="me-2" />
              Sign Up
            </Button>
          </LinkContainer>
        </>
      )}
    </div>
  </nav>
);

export default Sidebar;
