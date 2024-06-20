import React from 'react';
import NavBar from './elements/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalPrice } from '../store/buycart';
import { addToCart, remFromCart } from '../store/buycart';


const BuyPage: React.FC = () => {
    const cart = useSelector((state: any) => state.cart);
    const TotalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    const RemFromCart = (item : any) =>{
        dispatch(
            remFromCart({
                name: item.name,
                })
        )
    }
    const AddToCart = (item : any) =>{
        dispatch(
            addToCart(item)
        )

    }

    return (
        <>
            <NavBar />
            <section className='divrow'>
                <div className='mt-2 divrow border-2 flex-col p-4 border-black gap-1'>
                    {cart.length > 0 ? (
                <>
                    {cart.map((item : any) => (
                    <div className='flex justify-between border-2 w-full border-gray-600 rounded-xl bg-gray-100 py-6 px-4 shadow-xl' >
                        <img className='w-[15rem] h-[15rem] object-contain' src={item.img} alt='product' />
                        <div className="flex flex-col">
                            <h1 className='text-lg font-bold'>{item.name}</h1>
                            <p>{item.count}</p>
                            <h3 className='font-semibold text-gray-500'>${item.price}</h3>
                            <button className='button' onClick={() => RemFromCart(item)}>-</button>
                            <button className='button' onClick={() => AddToCart(item)}>+</button>
                        </div>
                    </div>
                ))}
                <div className='divrow justify-between w-full'>
                    <h1 className='font-bitter ml-2 text-black sm:text-3xl md:text-2xl lg:text-xl'>Всього</h1>
                    <h1 className='font-bitter ml-2 text-black sm:text-3xl md:text-2xl lg:text-xl' >${TotalPrice}</h1>
                </div>
                </>
                ):(
                <h1>Кошик пустий</h1>)
                }
                </div>
            </section>
        </>
    );
}

export default BuyPage;
