import React, { useEffect, useState } from 'react';
import NavBar from './elements/NavBar';
import axios from 'axios';
import { useUser } from './UserContext';

const OrdersPage: React.FC = () => {
    const { user } = useUser();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:3001/orders?email=${user.email}`)
                .then(response => {
                    setOrders(response.data);
                })
                .catch(error => {
                    console.error("Бредік якийсь виходить:", error);
                });
        }
    }, [user]);

    return (
        <>
            <NavBar />
            <section className="divrow">
                <div className="my-2 divrow border-2 flex-col p-4 border-black gap-1">
                    <h1 className='text-lg font-bold'>Історія замовлень</h1>
                    {orders.length > 0 ? (
                        orders.map((order: any) => (
                            <div key={order.id} className='border-2 w-full border-gray-600 rounded-xl bg-gray-100 py-6 px-4 shadow-xl'>
                                <h2>Замовлення від {new Date(order.date).toLocaleString()}</h2>
                                <p>Сума: ${order.total}</p>
                                <div>
                                    {order.items.map((item: any) => (
                                        <div key={item.name} className='flex justify-between'>
                                            <p>{item.name}</p>
                                            <p>Кількість: {item.count}</p>
                                            <p>Ціна: ${item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>Історія замовлень порожня</h1>
                    )}
                </div>
            </section>
        </>
    );
}

export default OrdersPage;