import React from 'react';
import NavBar from '../NavBar/NavBar';

const MainPage: React.FC = () => {
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
};

export default MainPage;