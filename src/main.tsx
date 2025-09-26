import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.scss';
import Home from './pages/Home';
import Search from './pages/Search';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import AccountLogin from './pages/AccountLogin';
import AccountRegister from './pages/AccountRegister';
import Error from './pages/Error';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/user/me" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account/login" element={<AccountLogin />} />
        <Route path="/account/register" element={<AccountRegister />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
