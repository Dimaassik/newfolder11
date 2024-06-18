import React from 'react';
import NavBar from '../NavBar/NavBar';
import { popularDevices } from '../../data/data';

const MainPage: React.FC = () => {

    return (
        <div>
            <NavBar />
            <section className='divrow'>
                <div>
                <img alt='Головне фото'></img>
                </div>
                <div className='flex flex-col'>
                {popularDevices.map((item) =>(
                <div>
                    <p><img alt={item.text} src={item.img} />{item.text}</p>
                </div>
          ))}
                </div>
            </section>
        </div>
    );
};

export default MainPage;