import React from 'react';
import NavBar from './elements/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, remFromCart, clearCart, selectTotalPrice } from '../store/buycart';
import axios from 'axios';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const BuyPage: React.FC = () => {
    const cart = useSelector((state: any) => state.cart);
    const TotalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();
    const { user } = useUser();
    const navigate = useNavigate();

    const RemFromCart = (item : any) =>{
        dispatch(
            remFromCart({
                name: item.name,
                })
        );
    }

    const AddToCart = (item : any) =>{
        dispatch(
            addToCart(item)
        );
    }

    const handlePurchase = () => {
        if (user && cart.length > 0) {
            axios.post('http://localhost:3001/purchase', {
                email: user.email,
                items: cart,
                total: TotalPrice
            }).then(response => {
                navigate('/orders');
            }).catch(error => {
                console.error("Purchase error:", error);
            });
        }
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <NavBar />
            <section className='divrow'>
                <div className='my-2 divrow border-2 flex-col p-4 border-black gap-1'>
                    {cart.length > 0 ? (
                <>
                    {cart.map((item : any) => (
                    <div key={item.id} className='flex justify-between border-2 w-full border-gray-600 rounded-xl bg-gray-100 py-6 px-4 shadow-xl' >
                        <img className='w-[15rem] h-[15rem] object-contain' src={item.img} alt='product' />
                        <div className="mx-2 flex flex-col justify-center w-[15rem]">
                            <button className='button' onClick={() => RemFromCart(item)}>-</button>
                            <h1 className='text-lg font-bold'>{item.name}</h1>
                            <p>Кількість:{item.count}</p>
                            <h3 className='font-semibold text-gray-500'>${item.price}</h3>
                            <button className='button' onClick={() => AddToCart(item)}>+</button>
                        </div>
                    </div>
                ))}
                <div className='divrow justify-between w-full'>
                    <h1 className='font-bitter ml-2 text-black text-4xl'>Всього</h1>
                    <h1 className='font-bitter ml-2 text-black text-4xl' >${TotalPrice}</h1>
                </div>
                <button className='button-cart' onClick={handlePurchase}>Купити</button>
                <button className='button-cart' onClick={handleClearCart}>Очистити кошик</button>
                </>
                ):(
                <h1>Кошик пустий :(</h1>)
                }
                </div>
            </section>
        </>
    );
}

export default BuyPage;