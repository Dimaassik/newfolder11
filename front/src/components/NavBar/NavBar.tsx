import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';
import './NavBar.css';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleAuthRedirect = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>MyLogo</div>
      {user ? (
        <button className="auth-button" onClick={handleLogout}>Logout</button>
      ) : (
        <button className="auth-button" onClick={handleAuthRedirect}>Login/SignUp</button>
      )}
    </nav>
  );
};

export default NavBar;