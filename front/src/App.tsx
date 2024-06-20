import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignUpPage from './components/AuthPage/SignUp';
import LoginPage from './components/AuthPage/Login';
import ProductPage from './components/ProductPage';
import CategoryPage from './components/CategoryPage';
import BuyPage from './components/BuyPage';
import OrdersPage from './components/OrdersPage';
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
                <Route path="/cart" element={<BuyPage />} />
                <Route path="/orders" element={<OrdersPage />} />
            </Routes>
        </Provider>
    );
};

export default App;