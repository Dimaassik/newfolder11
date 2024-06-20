import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { mice, keyboards, monitors, headphones, microphones, phones } from '../../data/data';

interface Product {
    id: number;
    category: string;
    title: string;
    price: string;
    img: string;
}

const getCategoryLink = (category: string): string => {
    return `/category/${category.toLowerCase()}`;
};

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        if (term.length > 1) {
            const allProducts = [
                ...keyboards,
                ...mice,
                ...monitors,
                ...headphones,
                ...microphones,
                ...phones
            ];

            const results = allProducts
                .filter(product => product.title.toLowerCase().includes(term))
                .sort((a, b) => a.title.toLowerCase().startsWith(term) ? -1 : b.title.toLowerCase().startsWith(term) ? 1 : 0);

            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (product: Product) => {
        const categoryLink = getCategoryLink(product.category);
        const productTitle = product.title.replace(/\s+/g, '-').toLowerCase();
        navigate(`${categoryLink}/${productTitle}`);
        setSearchTerm('');
        setFilteredProducts([]);
    };

    return (
        <div className="relative">
            <input type="text" value={searchTerm} onChange={handleSearchChange} className='mainsearch' placeholder="Пошук"/>
            {filteredProducts.length > 0 && (
                <ul className="absolute top-full bg-white shadow-md border border-gray-200 rounded mt-1 w-48 md:w-64">
                    {filteredProducts.map(product => (
                        <li key={product.id} onClick={() => handleProductClick(product)} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                            {product.title}
                        </li>
                    ))}
                </ul>
            )}
            <button className="absolute right-2 top-1"><img className="h-4 w-4 m-1 cursor-pointer" src="/assets/search.png" alt='search'/></button>
        </div>
    );
};

export default SearchBar;