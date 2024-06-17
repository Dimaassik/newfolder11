import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SignUpPage from './components/AuthPage/RegPage/SignUp';
import LoginPage from './components/AuthPage/LoginPage/Login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default App;