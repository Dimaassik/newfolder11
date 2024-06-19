import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { popularDevices } from "../../data/data";
import category from '../../data/data'; 
import CategoryRow from '../elements/CategoryRow';

const handleMainImg = (img: string) => {
    let el = document.getElementById("mainImg") as HTMLImageElement;
    if (el) el.src = img;
    return;
}

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <section className='divrow flex-wrap py-2 bg-[#202020]'>
                <div className="shadow-xl p-2">
                    <img className="w-[30rem] h-[22rem]" id="mainImg" src={popularDevices[0].img} alt='Головне фото' />
                </div>
                <div className='flex flex-col gap-2 '>
                    {popularDevices.map((item) => (
                        <div className='flex items-center rounded-md bg-[#a8a8a8] p-2 cursor-pointer hover:brightness-75' onMouseEnter={ () => handleMainImg(item.img)}>
                            <img className="p-1 w-24 h-16"src={item.img} alt={item.text} />
                            <p className="p-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className='py-4 px-4 bg-[#f5f5f5]'>
                <h2 className='text-2xl font-bold mb-4'>Категорії товарів</h2>
                {category.map((item) => ( 
                    <CategoryRow items={item.data} category={item.text}/>
                ))}
            </section>
        </div>
    );
};

export default MainPage;