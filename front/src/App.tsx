import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SignUpPage from './components/AuthPage/SignUp';
import LoginPage from './components/AuthPage/Login';
import ProductPage from './components/ProductPage/ProductPage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/category/:category/:productName" element={<ProductPage />} />
        </Routes>
    );
};

export default App;