import React from 'react';
// import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';

function MainPage() {
    // const navigate = useNavigate();

    // const handleRedirect = () => {
    //     navigate('/auth');
    // };

    return (
        <div>
            <NavBar />
            <h1>Welcome to the Main Page</h1>
        </div>
    );
}

export default MainPage;
