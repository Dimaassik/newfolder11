import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mice, keyboards, monitors, headphones, microphones, phones } from '../data/data';
import NavBar from './elements/NavBar';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const getProducts = () => {
    switch (category) {
      case 'mice':
        return mice;
      case 'keyboards':
        return keyboards;
      case 'monitors':
        return monitors;
      case 'microphones':
        return microphones;
      case 'headphones':
        return headphones;
      case 'phones':
            return phones;
      default:
        return [];
    }
  };

  const products = getProducts();
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <NavBar />
      <section className='py-4 px-4 bg-[#f5f5f5]'>
        <h2 className='text-2xl font-bold mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
        <div className='flex flex-wrap gap-4 justify-center'>
          {products.map((item) => (
            <div key={item.id} className='product'>
              <Link to={`/category/${category}/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
              
                <img className="w-[30rem] h-[10rem] object-contain mb-2" src={`/${item.img}`} alt={item.title} />
                <h4 className='text-lg font-bold'>{item.title}</h4>
                <p>{item.description}</p>
                <p className='text-sm text-gray-500'>{item.price}</p>
              </Link>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;