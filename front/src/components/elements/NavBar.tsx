import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import { category } from '../../data/data';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';
import Drawer from './Drawer';

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser();
    const cart = useSelector((state: any) => state.cart);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleAuthRedirect = () => {
        navigate('/signup');
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const toggleNavDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDrawerOpen(false);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="flex justify-between bg-grays-dark p-2 pl-3 items-center flex-wrap">
                <div className="text-2xl text-white font-bold cursor-pointer" onClick={() => navigate('/')}>MyLogo</div>
                <SearchBar />
                <div className="flex items-center md:hidden">
                    <button className="text-white" onClick={toggleNavDrawer}>
                        <img src="/assets/menu.png" alt="menu" className="w-8 h-8" />
                    </button>
                </div>
                <div className="hidden md:flex items-center">
                    {user ? (
                        <>
                            <button className="button py-2" onClick={handleLogout}>Logout</button>
                            <div className="relative hover:brightness-50 ">
                                <img src="/assets/cart.png" alt="cart" className="w-12 h-12 ml-4" />
                                <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2">{cart.id.length}</span>
                            </div>
                        </>
                    ) : (
                        <button className="button my-1 px-3 bg-[#202020]" onClick={handleAuthRedirect}>Login/SignUp</button>
                    )}
                </div>
            </nav>
            <nav className="hidden md:flex bg-grays-dark justify-center items-center flex-wrap">
                {category.map((item) => (
                    <Link key={item.text} to={item.link} className="font-yeseva text-white px-2 py-1 text-lg font-confortaa hover:bg-gray-400">{item.text}</Link>
                ))}
            </nav>
            <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleNavDrawer}>
                {category.map((item) => (
                    <Link key={item.text} to={item.link} className="block text-white px-4 py-2 text-lg hover:bg-gray-400">{item.text}</Link>
                ))}
                {user ? (
                    <>
                        <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-400" onClick={handleLogout}>Logout</button>
                        <div className="relative hover:brightness-50 flex items-center px-4 py-2">
                            <img src="/assets/cart.png" alt="cart" className="w-8 h-8" />
                            <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2">{cart.id.length}</span>
                        </div>
                    </>
                ) : (
                    <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-400" onClick={handleAuthRedirect}>Login/SignUp</button>
                )}
            </Drawer>
        </>
    );
};

export default NavBar;