import React, { useState } from 'react';
import CardProduct from '../components/cardProduct';
import Header from '../components/header/header';
import MenuSideBar from '../components/menuSideBar';
import Pagination from '../components/pagination';
import Footer from './footer';
import data from '../data.json';

const Products = () => {
  const [products, setProducts] = useState(data.products.slice(0, 8));
  return (
    <>
      <Header />
      <h1 class='text-3xl'>Liste des produits</h1>
      <div class='grid grid-cols-4 gap-4 mt-10'>
        {/* menu of the sidebar */}
        <div class='xl:col-span-1 lg:col-span-1  col-span-4'>
          <MenuSideBar />
        </div>
        {/* end menu of the sidebar */}
        {/* list products*/}

        <div class='2xl:col-span-3 xl:col-span-3 lg:col-span-3  col-span-4 '>
          <div class='pt-2 relative ml-7 inline-block mx-auto text-gray-600'>
            <input
              class='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
              type='search'
              name='search'
              placeholder='Search'
            />
          </div>
          <div className='inline-block float-right mr-5'>
            <button class='relative text-sm focus:outline-none group mt-4 sm:mt-0'>
              <div class='flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300'>
                <span class='font-medium'>Popular</span>
                <svg
                  class='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </div>
              <div class='absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex'>
                <a
                  class='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Popular
                </a>
                <a
                  class='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Featured
                </a>
                <a
                  class='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Newest
                </a>
                <a
                  class='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Lowest Price
                </a>
                <a
                  class='w-full px-4 py-2 text-left hover:bg-gray-200'
                  href='#'
                >
                  Highest Price
                </a>
              </div>
            </button>
          </div>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6  p-8'>
            {products.map((p) => (
              <CardProduct product={p} />
            ))}
          </div>
          <Pagination />
        </div>
        {/* end list products*/}
      </div>
      <Footer />
    </>
  );
};

export default Products;
