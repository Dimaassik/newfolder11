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

    const getCategoryLink = (category: string): string => {
        return `/category/${category.toLowerCase()}`;
    };
    const handleProductClick = (category: string, productTitle: string) => {
        const categoryLink = getCategoryLink(category);
        const formattedProductTitle = productTitle.replace(/\s+/g, '-').toLowerCase();
        navigate(`${categoryLink}/${formattedProductTitle}`);
    };
    return (
        <div className='mb-6'>
            <h3 className='text-xl font-semibold mb-2'>{category}</h3>
            <div className='flex flex-wrap gap-4 justify-center'>
                {items.map((item) => (
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
