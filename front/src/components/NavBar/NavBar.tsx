import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    const navigate = useNavigate();

    const handleAuthRedirect = () => {
        navigate('/signup');
    };

    return (
        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/')}>MyLogo</div>
            <button className="auth-button" onClick={handleAuthRedirect}>Login / Register</button>
        </nav>
    );
};

export default NavBar;