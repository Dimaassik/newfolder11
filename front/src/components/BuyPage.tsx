import React from 'react';
import NavBar from './elements/NavBar';
import { useSelector } from 'react-redux';

const BuyPage: React.FC = () => {
    const cart = useSelector((state: any) => state.cart);

    return (
        <>
            <NavBar />
            {cart.map((item : any) => (
                <p>{item.name}</p>
            ))}
        </>
    );
}

export default BuyPage;
