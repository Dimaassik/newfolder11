import React from 'react';
import { useParams } from 'react-router-dom';
import { mice, keyboards, monitors, headphones, microphones, phones } from '../../data/data';
import NavBar from '../NavBar/NavBar';
import CategoryRow from './CategoryRow';

interface Product {
    id: number;
    category: string;
    description: string;
    fullDescription?: string;
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
    let relatedProducts: Product[] = [];
    const categoryName = category ? category.toLowerCase() : '';

    if (categoryName && productName) {
        if (categoryName === 'keyboards') {
            product = findProduct(keyboards, productName);
            relatedProducts = keyboards;
        } else if (categoryName === 'mice') {
            product = findProduct(mice, productName);
            relatedProducts = mice;
        } else if (categoryName === 'monitors') {
            product = findProduct(monitors, productName);
            relatedProducts = monitors;
        } else if (categoryName === 'headphones') {
            product = findProduct(headphones, productName);
            relatedProducts = headphones;
        } else if (categoryName === 'microphones') {
            product = findProduct(microphones, productName);
            relatedProducts = microphones;
        } else if (categoryName === 'phones') {
            product = findProduct(phones, productName);
            relatedProducts = phones;
        }
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <NavBar />
            <section className='divrow pt-4'>
                <img className="w-[40rem] h-[30rem] object-contain" src={`/${product.img}`} alt={product.title} />
                <div className='flex flex-col'>
                    <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                    <p className='w-[35rem] rounded-md bg-[#e0e0e0] p-2 mt-2'>{product.fullDescription}</p>
                    <h1 className='text-6xl m-1 font-semibold text-gray-500'>{product.price}</h1>
                </div>
            </section>
            <CategoryRow items={relatedProducts} category={categoryName} />
        </>
    );
};

export default ProductPage;