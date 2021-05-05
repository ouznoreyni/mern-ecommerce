import React, { useState } from 'react';
import ProductCarousel from '../components/productCarousel';
import Header from '../components/header/header';
import data from '../data.json';

const Home = () => {
  const [products, setproducts] = useState(data.products.slice(0, 4));

  return (
    <div className='w-full'>
      <Header />
      {/* slide des produits */}
      <div className='container mx-auto'>
        <ProductCarousel />
      </div>
      {/* slide des produits */}
      {/* info and satisfaction */}
      <div class='grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 mt-10 p-5 border-2  w-full lg:w-4/5 lg:ml-24 xl:w-4/5 xl:ml-24 2xl:w-4/5 2xl:ml-24'>
        <div className='border-r-2'>
          <h6 className='font-bold text-xs'>BONUS PLUS</h6>
          <p className='text-xs'>
            Obtenez un bonus en achetant plus de trois produits
          </p>
        </div>
        <div className='border-r-2'>
          <h6 className='font-bold text-xs'>LIVRAISON GRATUITE</h6>
          <p className='text-xs'>
            Livraison gratuite sur toutes les commandes de plus de 50000 fc
          </p>
        </div>
        <div className='border-r-2'>
          <h6 className='font-bold text-xs'>GARANTIE DE REMBOURSEMENT</h6>
          <p className='text-xs'>Garantie de remboursement à 100%</p>
        </div>
        <div>
          <h6 className='font-bold text-xs'>SUPPORT EN LIGNE 24/7</h6>
          <p className='text-xs'>Appelez-nous : +221 77 800 00 00</p>
        </div>
      </div>
      {/* info and satisfaction */}
      {/* lastest and top products */}
      <div className='my-10 bg-gray-500 h-44'></div>
      {/* end lastest and top products */}
    </div>
  );
};

export default Home;
