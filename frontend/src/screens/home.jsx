import React, { useState, useEffect } from 'react';
import ProductCarousel from '../components/productCarousel';
import Header from '../components/header/header';
import data from '../data.json';
import CardProduct from '../components/cardProduct';
import Footer from './footer';

const Home = () => {
  const [products, setproducts] = useState(data.products.slice(0, 4));

  return (
    <>
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
        <div className='flex content-center'>
          <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6 2xl:ml-24 p-8'>
            {products.map((p) => (
              <CardProduct product={p} />
            ))}
          </div>
        </div>
        {/* end lastest and top products */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
