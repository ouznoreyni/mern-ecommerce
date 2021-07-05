import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Brand from './Brand';
const Header = ({ onPressCart }) => {
	const cartSelector = useSelector((state) => state.entities.cart);
	useEffect(() => {
		console.log('card selector==>', cartSelector);
		return () => {};
	}, []);
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);

	const handleToggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
	return (
		<header>
			<Brand />
			<div className='w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 shadow-lg mb-5 '>
				<div className='flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'>
					<div className='p-4 flex flex-row items-center justify-between'>
						<Link
							to='/'
							className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline w-10'
						>
							<img src='../../assets/img/logo.png' alt='logo' />{' '}
						</Link>
						<button
							className='md:hidden rounded-lg focus:outline-none focus:shadow-outline'
							onClick={handleToggleDropDown}
						>
							<i
								className={`fas ${isDropDownOpen ? 'fa-times' : 'fa-bars'}`}
							></i>
						</button>
					</div>
					<nav
						className={`${
							isDropDownOpen ? 'flex' : 'hidden'
						} flex-col flex-grow pb-4 md:pb-0  md:flex md:justify-end md:flex-row `}
					>
						<Link
							className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
							to='/'
						>
							Accueil
						</Link>
						<Link
							className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
							to='/products'
						>
							Produits
						</Link>
						<Link
							className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
							to='/about'
						>
							À propos
						</Link>
						<Link
							className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
							to='/cart'
						>
							<i className='fas fa-shopping-cart'></i>{' '}
							{cartSelector.list.cartItems.length}
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
