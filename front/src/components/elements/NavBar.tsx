import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import { category } from '../../data/data';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalItemCount,clearCart } from '../../store/buycart';
import Drawer from './Drawer';


const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, logout } = useUser();
    const TotalCart = useSelector(selectTotalItemCount);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleAuthRedirect = () => {
        navigate('/signup');
    };

    const handleLogout = () => {
        dispatch(clearCart());
        logout();
        navigate('/');
    };

    const toggleNavDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleCart = () => {
      navigate('/cart');
    };

    return (
        <>
            <nav className="flex justify-between bg-grays-dark p-2 pl-3 items-center flex-wrap">
            <div className="text-2xl text-white font-bold cursor-pointer" onClick={() => navigate('/')}>
                <img src="/assets/logo.png" alt="MyLogo" className='w-[3.5rem] mx-6'/>
            </div>
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
                            <div className="relative hover:brightness-50" onClick={handleCart}>
                                <img src="/assets/cart.png" alt="cart" className="w-12 h-12 ml-4" />
                                <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-2">{TotalCart}</span>
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
                        <div className="" onClick={handleCart}>
                            <p className="text-white px-4 py-2 text-lg hover:bg-gray-400 cursor-pointer">Кошик</p>
                        </div>
                        <button className="block w-full text-left px-4 py-2 text-white hover:bg-red-500" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-400" onClick={handleAuthRedirect}>Login/SignUp</button>
                )}
            </Drawer>
        </>
    );

};

export default NavBar;