import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-blue'>
      <div className='topHeader p-3 h-10 grid grid-cols-3 gap-4'>
        <div className='col-span-2 text-white text-sm font-bold ml-10'>
          Appelez-nous : +221 77 800 00 00
        </div>
        <div className=''>
          <div>
            <Link to='/login'>
              <button className='bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md px-2'>
                <span className='mr-2'>mon compte</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav className='bg-white shadow'>
        <div className='container mx-auto px-6 py-3 md:flex md:justify-between md:items-center'>
          <div className='flex justify-between items-center'>
            <div className='w-10'>
              <Link
                to='/'
                className='text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700'
                href='#'
              >
                <img src='../../assets/img/logo.png' alt='logo' />
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className='flex md:hidden'>
              <button
                type='button'
                className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'
              >
                <i className='fas fa-bars'></i>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div className='md:flex items-center'>
            <div className='flex flex-col md:flex-row md:mx-6'>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'
                to='/'
              >
                accueil
              </Link>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'
                to='shop'
              >
                Produits
              </Link>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'
                to='/contact'
              >
                Contact
              </Link>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0'
                to='/about'
              >
                À propos
              </Link>
            </div>

            <div className='flex justify-center md:block'>
              <Link
                className='relative text-gray-700 hover:text-gray-600'
                to='/cart'
              >
                <i className='fas fa-shopping-cart'></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
