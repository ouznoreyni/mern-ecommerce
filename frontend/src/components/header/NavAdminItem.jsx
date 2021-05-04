import React from 'react';
import { Link } from 'react-router-dom';

const NavAdminItem = ({ name, urlPath, iconClass }) => {
  return (
    <Link
      className='flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100'
      to={urlPath}
    >
      <span>
        <i className={iconClass}></i>
      </span>

      <span className='mx-3'>{name}</span>
    </Link>
  );
};

export default NavAdminItem;
