import React from 'react';
import NavBar from '../NavBar/NavBar';
import { popularDevices } from "../../data/data";

const handleMainImg = (img: string) => {
    let el = document.getElementById("mainImg") as HTMLImageElement;
    if (el) el.src = img;
    return;
}

const MainPage: React.FC = () => {

    return (
        <div>
            <NavBar />
            <section className='divrow flex-wrap py-2 bg-gray-200'>
                <div className="border border-black shadow-xl p-2 bg-white">
                    <img className="w-[40rem] h-[32rem]" id="mainImg" src={popularDevices[0].img} alt='Головне фото' />
                </div>
                <div className='flex flex-col gap-2 '>
                    {popularDevices.map((item) => (
                        <div className='flex items-center rounded-md bg-[#748dd8] p-2 cursor-pointer hover:brightness-75'>
                            <img className="p-1 w-24 h-16"src={item.img} alt={item.text} onMouseEnter={ () => handleMainImg(item.img)}/>
                            <p className="p-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainPage;