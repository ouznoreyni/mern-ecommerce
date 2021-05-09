import React from 'react';

const CardItemInfo = ({ title, icon, count, moreValue, moreDetails }) => {
  return (
    <div class='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg'>
      <div class='flex items-start justify-between'>
        <div class='flex flex-col space-y-2'>
          <span class='text-gray-400'>{title}</span>
          <span class='text-lg font-semibold'>{count}</span>
        </div>
        <div class='p-10 bg-purple-500 rounded-md'></div>
      </div>
      <div>
        <span class='inline-block px-2 text-sm text-white bg-green-300 rounded'>
          {moreValue}
        </span>
        <span>{moreDetails}</span>
      </div>
    </div>
  );
};

export default CardItemInfo;
