import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mice, keyboards, monitors, headphones, microphones, phones } from '../data/data';
import NavBar from './elements/NavBar';
import CategoryRow from './elements/CategoryRow';
import { addToCart } from '../store/buycart.slice';

interface Product {
    id: number;
    category: string;
    description: string;
    fullDescription: string;
    title: string;
    price: string;
    img: string;
}

const ProductPage: React.FC = () => {
    const { category, productName } = useParams();
    const dispatch = useDispatch();

    const findProduct = (products: Product[], productName: string) => {
        return products.find(product => {
            const formattedTitle = product.title.replace(/\s+/g, '-').toLowerCase();
            return formattedTitle === productName;
        });
    };

    const [product, setProduct] = useState<Product>();
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const categoryName = category ? category.toLowerCase() : '';

    const productCategories: { [key: string]: Product[] } = {
        keyboards,
        mice,
        monitors,
        headphones,
        microphones,
        phones,
    };

    useEffect(() => {
        if (categoryName && productName) {
            const products = productCategories[categoryName];
            const foundProduct = findProduct(products, productName);
            setProduct(foundProduct);
            setRelatedProducts(products);
        }
    }, [categoryName, productName]);

    const onAddClick = () => {
    if (product) {
        dispatch(
            addToCart({
                itemId: product.id.toString(),
                title: product.title.toString(),
            })
        );
    }
};

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
          <NavBar />
          <section className="flex flex-col md:flex-row md:items-start pt-4 px-4">
            <img className="w-[40rem] h-[30rem] object-contain" src={`/${product.img}`} alt={product.title} />
            <div className="flex flex-col mt-4 md:mt-0 md:ml-4 md:w-2/3 lg:w-1/2">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="w-full md:max-w-full rounded-md bg-[#e0e0e0] p-2 mt-2">{product.fullDescription}</p>
              <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mt-4">
                <h1 className="text-3xl md:text-6xl m-1 font-semibold text-gray-500">{product.price}</h1>
                <button className="button mt-4 md:mt-0 md:ml-4" onClick={onAddClick}>Додати до кошика</button>
              </div>
            </div>
          </section>
          <CategoryRow items={relatedProducts} category={categoryName} />
        </>
      );
    };
    
    export default ProductPage;