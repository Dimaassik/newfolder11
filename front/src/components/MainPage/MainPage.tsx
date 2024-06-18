import React from 'react';
import NavBar from '../NavBar/NavBar';
import { popular_devices } from "../../data/popular_devices";

const MainPage: React.FC = () => {

    return (
        <div>
            <NavBar />
            <section className='divrow'>
                <div>
                    <img alt='Головне фото' />
                </div>
                <div className='flex flex-col'>
                    {popular_devices.map((item) => (
                        <div key={item.id}>
                            <img src={item.images[0]} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainPage;