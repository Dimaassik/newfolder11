import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../UserContext';
import { category } from '../../data/data';
import SearchBar from './SearchBar';
import { useSelector } from 'react-redux';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const cart = useSelector((state: any) => state.cart);

  const handleAuthRedirect = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="flex justify-between bg-grays-dark p-2 pl-3 items-center flex-wrap">
        <div className="text-2xl text-white font-bold cursor-pointer" onClick={() => navigate('/')}>MyLogo</div>
        <SearchBar />
        {user ? (
          <>
          <div className='divrow'>
            <button className="button py-2" onClick={handleLogout}>Logout</button>
            <img src='/assets/cart.png' alt='cart' className='w-12 h-12'/>
              <h1>{cart.id.length}</h1>
            </div>
          </>
        ) : (
          <button className="button my-1 px-3 bg-[#202020]" onClick={handleAuthRedirect}>Login/SignUp</button>
        )}
      </nav>
      <nav className="flex bg-grays-dark justify-center items-center flex-wrap">
        {category.map((item) => (
          <Link key={item.text} to={item.link} className="font-yeseva text-white px-2 py-1 text-lg font-confortaa hover:bg-gray-400">{item.text}</Link>
        ))}
      </nav>
    </>
  );
};

export default NavBar;
