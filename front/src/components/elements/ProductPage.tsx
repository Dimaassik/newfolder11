import React from 'react';
import { useParams } from 'react-router-dom';
import keyboards from '../../data/keyboards';
import mice from '../../data/mice';
import monitors from '../../data/monitors';
import headphones from '../../data/headphones';
import microphones from '../../data/microphones';
import phones from '../../data/phones';

interface Product {
    id: number;
    category: string;
    title: string;
    price: string;
    img: string;
}

const ProductPage: React.FC = () => {
    const { category, productName } = useParams<{ category: string | undefined, productName: string | undefined }>();

    const findProduct = (products: Product[], productName: string): Product | undefined => {
        return products.find(product => {
            const formattedTitle = product.title.replace(/\s+/g, '-').toLowerCase();
            return formattedTitle === productName;
        });
    };

    let product: Product | undefined;
        if (category && productName) {
            if (category.toLowerCase() === 'keyboards') {
                product = findProduct(keyboards, productName);
            } else if (category.toLowerCase() === 'mice') {
                product = findProduct(mice, productName);
            } else if (category.toLowerCase() === 'monitors') {
                product = findProduct(monitors, productName);
            } else if (category.toLowerCase() === 'headphones') {
                product = findProduct(headphones, productName);
            } else if (category.toLowerCase() === 'microphones') {
                product = findProduct(microphones, productName);
            } else if (category.toLowerCase() === 'phones') {
                product = findProduct(phones, productName);
            }
        }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='product'>
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <img className="w-[60rem] h-[10rem] object-contain "src={`/${product.img}`} alt={product.title} />
        </div>
    );
};

export default ProductPage;