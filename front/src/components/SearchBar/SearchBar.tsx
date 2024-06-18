import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import keyboards from '../../data/keyboards';
import mice from '../../data/mice';

interface Product {
    id: number;
    category: string;
    title: string;
    price: string;
    images: string[];
}

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.length > 1) {
            const results = [
                ...keyboards.filter(product => product.title.toLowerCase().includes(term.toLowerCase())),
                ...mice.filter(product => product.title.toLowerCase().includes(term.toLowerCase()))
            ];
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    const getCategoryLink = (category: string): string => {
        return `/category/${category.toLowerCase()}`;
    };

    const handleProductClick = (product: Product) => {
        const categoryLink = getCategoryLink(product.category);
        const productTitle = product.title.replace(/\s+/g, '-').toLowerCase();
        navigate(`${categoryLink}/${productTitle}`);
        setSearchTerm('');
        setFilteredProducts([]);
    };

    return (
        <div className="search-bar relative">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Пошук"
                className="rounded rounded-2"
            />
            {filteredProducts.length > 0 && (
                <ul className="dropdown-menu absolute top-full bg-white shadow-md border border-gray-200 rounded">
                    {filteredProducts.map(product => (
                        <li key={product.id} onClick={() => handleProductClick(product)} className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                            {product.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;