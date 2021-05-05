import React from 'react';

const CardProduct = () => {
  return (
    <div>
      <a href='#' class='block h-64 rounded-lg shadow-lg bg-gray-600'></a>
      <div class='flex items-center justify-between mt-3'>
        <div>
          <a href='#' class='font-medium'>
            Product Name
          </a>
          <a class='flex items-center' href='#'>
            <span class='text-xs font-medium text-gray-600'>by</span>
            <span class='text-xs font-medium ml-1 text-indigo-500'>
              Store Name
            </span>
          </a>
        </div>
        <span class='flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded'>
          $34
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
