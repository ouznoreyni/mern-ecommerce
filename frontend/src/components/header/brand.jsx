import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Brand = () => {
  const state = useSelector((state) => state.auth);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(state.currentUser);
    return () => {};
  }, []);
  return (
    <nav class='flex justify-between w-full topHeader text-white p-4'>
      <a href='/'>
        <span class='font-semibold text-xl tracking-tight'>Sen-Store</span>
      </a>
      <div>
        <h4 className='text-red-500'>
          Appelez au
          <span className='text-yellow-200 bold text-sm ml-3'>
            <i class='fas fa-phone-alt bold text-yellow-200'></i> 77 630 30 30
          </span>
        </h4>
      </div>
      <div class='items-center w-auto flex'>
        {/* <div class='flex '>
          <a class='block text-white mr-4' href='/link'>
            Link 1
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 2
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 3
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 4
          </a>
        </div> */}

        <div class='flex text-sm'>
          {currentUser ? (
            <Link
              class='p-2 ml-2 text-black bg-white font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-700 hover:text-white hover:border-white'
              to='/admin/dashboard'
            >
              {currentUser.sub}
            </Link>
          ) : (
            <>
              <Link
                class='p-2 ml-2 text-black bg-white font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-700 hover:text-white hover:border-white'
                to='/login'
              >
                connexion
              </Link>
              <Link
                class='p-2 ml-2 bg-teal-500 text-black bg-white font-semibold leading-none border border-gray-700 rounded hover:border-transparent hover:bg-gray-700 hover:text-white hover:border-white'
                to='/register'
              >
                creer compte
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Brand;
