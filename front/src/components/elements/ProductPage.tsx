import React from 'react';
import { useParams } from 'react-router-dom';
import keyboards from '../../data/keyboards';
import mice from '../../data/mice';
import monitors from '../../data/monitors';

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
            }
        }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <img src={product.img[0]} alt={product.title} />
        </div>
    );
};

export default ProductPage;