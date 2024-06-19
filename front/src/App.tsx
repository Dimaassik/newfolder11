import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import SignUpPage from './components/AuthPage/SignUp';
import LoginPage from './components/AuthPage/Login';
import ProductPage from './components/elements/ProductPage';
import CategoryPage from './components/elements/CategoryPage';
import { Provider } from 'react-redux';
import { store } from './store/store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/category/:category/:productName" element={<ProductPage />} />
            </Routes>
        </Provider>
    );
};

export default App;