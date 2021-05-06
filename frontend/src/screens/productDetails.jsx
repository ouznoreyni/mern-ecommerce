import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/header/header';
import { products } from '../data.json';
import Footer from './footer';

const ProductDetails = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const productDetail = products.find((p) => p.id == id);
    if (productDetail) {
      setProduct(productDetail);
    } else {
      history.push('/products');
    }
    return () => {};
  }, [product]);
  return (
    <>
      <Header />
      <div class='py-6'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div class='flex items-center space-x-2 text-gray-400 text-sm'>
            <Link to='/products' class='hover:underline hover:text-gray-600'>
              produits
            </Link>
            <span>
              <i class='fas fa-chevron-right h-5 w-5 leading-none text-gray-300'></i>
            </span>
            <a to='#' class='hover:underline hover:text-gray-600'>
              {/* {product.category.name} */}
              category
            </a>
            <span>
              <i class='fas fa-chevron-right h-5 w-5 leading-none text-gray-300'></i>
            </span>
            <span>{product.brand}</span>
          </div>
        </div>

        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
          <div class='flex flex-col md:flex-row -mx-4'>
            <div class='md:flex-1 px-4'>
              <div>
                <div class='h-64 md:h-80 rounded-lg bg-gray-100 mb-4'>
                  <div
                    class='h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center'
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: 'cover',
                    }}
                  ></div>
                </div>

                <div class='flex -mx-2 mb-4'>
                  <template>
                    <div class='flex-1 px-2'>
                      <button class='focus:outline-none w-full rounded-lg h-24 md:h-32  flex items-center justify-center'>
                        <span class='text-2xl'></span>
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class='md:flex-1 px-4'>
              <h2 class='mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl'>
                {product.name}
              </h2>
              <p class='text-gray-500 text-sm'>
                marque{' '}
                <a to='#' class='text-indigo-600 hover:underline'>
                  {product.brand}
                </a>
              </p>

              <div class='flex items-center space-x-4 my-4'>
                <div>
                  <div class='rounded-lg bg-gray-100 flex py-2 px-3'>
                    <span class='font-bold text-indigo-600 text-3xl'>
                      {product.price}
                    </span>
                    <span class='text-indigo-400 ml-1 mt-1'>f cfa</span>
                  </div>
                </div>
                <div class='flex-1'>
                  <p class='text-green-500 text-xl font-semibold'>2%</p>
                  <p class='text-gray-400 text-sm'>reduction</p>
                </div>
              </div>

              <p class='text-gray-500'>{product.description}</p>

              <div class='flex py-4 space-x-4'>
                <div class='relative'>
                  <div class='text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold'>
                    Qty
                  </div>
                  <select class='cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    class='w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                    />
                  </svg>
                </div>

                <button
                  type='button'
                  class='h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white'
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
