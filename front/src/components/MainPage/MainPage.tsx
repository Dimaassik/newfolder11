import React from 'react';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import { popularDevices } from "../../data/data";
import mice from '../../data/mice';
import keyboards from '../../data/keyboards';
import monitors from '../../data/monitors';

const handleMainImg = (img: string) => {
    let el = document.getElementById("mainImg") as HTMLImageElement;
    if (el) el.src = img;
    return;
}

const MainPage: React.FC = () => {
    const navigate = useNavigate();

    const getCategoryLink = (category: string): string => {
        return `/category/${category.toLowerCase()}`;
    };

    const handleProductClick = (category: string, productTitle: string) => {
        const categoryLink = getCategoryLink(category);
        const formattedProductTitle = productTitle.replace(/\s+/g, '-').toLowerCase();
        navigate(`${categoryLink}/${formattedProductTitle}`);
    };
    
    return (
        <div>
            <NavBar />
            <section className='divrow flex-wrap py-2 bg-[#202020]'>
                <div className="shadow-xl p-2">
                    <img className="w-[30rem] h-[22rem]" id="mainImg" src={popularDevices[0].img} alt='Головне фото' />
                </div>
                <div className='flex flex-col gap-2 '>
                    {popularDevices.map((item) => (
                        <div className='flex items-center rounded-md bg-[#a8a8a8] p-2 cursor-pointer hover:brightness-75'>
                            <img className="p-1 w-24 h-16"src={item.img} alt={item.text} onMouseEnter={ () => handleMainImg(item.img)}/>
                            <p className="p-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-4 px-4 bg-[#f5f5f5]'>
                <h2 className='text-2xl font-bold mb-4'>Категорії товарів</h2>
                <div className='mb-6'>
                    <h3 className='text-xl font-semibold mb-2'>Миші</h3>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {mice.map((item) => (
                            <div key={item.id} className='product' onClick={() => handleProductClick('mice', item.title)}>
                                <div className='flex justify-center items-center mb-2'>
                                <img className="w-100 h-80 object-cover mb-2" src={item.img} alt={item.title} />
                                </div>
                                <h4 className='text-lg font-bold'>{item.title}</h4>
                                <p>{item.description}</p>
                                <p className='text-sm text-gray-500'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mb-6'>
                    <h3 className='text-xl font-semibold mb-2 '>Клавіатури</h3>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {keyboards.map((item) => (
                            <div key={item.id} className='product' onClick={() => handleProductClick('keyboards', item.title)}>
                                <img className="w-full h-30 mb-2" src={item.img} alt={item.title} />
                                <h4 className='text-lg font-bold'>{item.title}</h4>
                                <p>{item.description}</p>
                                <p className='text-sm text-gray-500'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mb-6'>
                    <h3 className='text-xl font-semibold mb-2'>Монітори</h3>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        {monitors.map((item) => (
                            <div key={item.id} className='product' onClick={() => handleProductClick('monitors', item.title)}>
                                <img className="w-full h-60 mb-2" src={item.img} alt={item.title} />
                                <h4 className='text-lg font-bold'>{item.title}</h4>
                                <p>{item.description}</p>
                                <p className='text-sm text-gray-500'>{item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPage;