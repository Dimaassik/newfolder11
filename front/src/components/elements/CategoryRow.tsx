import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    category: string;
    description: string;
    price: string;
    img: string;
}

interface CategoryRowProps {
    items: Product[];
    category: string;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ items, category }) => {

    const navigate = useNavigate();

    const shuffleArray = (array: Product[]): Product[] => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const getCategoryLink = (category: string): string => {
        return `/category/${category.toLowerCase()}`;
    };
    const handleProductClick = (category: string, productTitle: string) => {
        navigate(`${getCategoryLink(category)}/${productTitle.replace(/\s+/g, '-').toLowerCase()}`);
    };

    const randomItems = shuffleArray(items).slice(0, 3);

    return (
        <div className='m-2'>
            <h3 className='text-xl font-semibold mb-2 capitalize'>{category}</h3>
            <div className='flex flex-wrap gap-4 justify-center'>
                {randomItems.map((item) => (
                    <div key={item.id} className='product' onClick={() => handleProductClick(item.category, item.title)}>
                        <img className="w-[30rem] h-[10rem] object-contain mb-2" src={`/${item.img}`} alt={item.title} />
                        <h4 className='text-lg font-bold'>{item.title}</h4>
                        <p>{item.description}</p>
                        <p className='text-sm text-gray-500'>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryRow;
