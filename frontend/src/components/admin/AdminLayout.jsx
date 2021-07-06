import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavAdminItem from './NavAdminItem';

const AdminLayout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const handleCloseSideBar = () => {
		setSidebarOpen(false);
	};
	const handleOpenSideBar = () => {
		setSidebarOpen(true);
	};
	return (
		<>
			<div className='flex h-screen bg-gray-100 dark:bg-gray-800 font-roboto'>
				<div
					onClick={handleCloseSideBar}
					className={`fixed z-20 inset-0 opacity-50 transition-opacity lg:hidden
         
          ${sidebarOpen ? 'block' : 'hidden'} `}
				></div>

				<div
					className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${
						sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
					}`}
				>
					<div className='flex items-center justify-center mt-8'>
						<div className='flex items-center'>
							<div className='text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700'></div>
							<span className='text-white text-2xl mx-2 font-semibold'>
								<Link to='/admin/dashboard'> Noreyni-Store</Link>
							</span>
						</div>
					</div>

					<nav className='mt-10'>
						<NavAdminItem
							name='Dashboard'
							iconClass='fas fa-th-list'
							urlPath='/admin/dashboard'
						/>

						<NavAdminItem
							name='Products'
							iconClass='fab fa-product-hunt'
							urlPath='/admin/products'
						/>
						<NavAdminItem
							name='categories'
							iconClass='fas fa-box'
							urlPath='/admin/categories'
						/>

						<NavAdminItem
							name='commandes'
							iconClass='fas fa-clipboard'
							urlPath='/admin/orders'
						/>

						<NavAdminItem
							name='clients'
							iconClass='fas fa-users'
							urlPath='/admin/users'
						/>
					</nav>
				</div>
				<div className='flex-1 flex flex-col overflow-hidden'>
					<header className='flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600'>
						<div className='flex items-center'>
							<button
								onClick={handleOpenSideBar}
								className='text-gray-500 focus:outline-none lg:hidden'
							>
								<i className='fas fa-bars'></i>
							</button>

							<div className='relative mx-4 lg:mx-0'>
								<span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
									<i className='fas fa-search'></i>
								</span>

								<input
									className='form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600'
									type='text'
									placeholder='Search'
								/>
							</div>
						</div>

						<div className='flex items-center'>
							<div className='relative'>
								<Link
									to='/'
									className='flex mx-4 text-gray-600 focus:outline-none'
								>
									<i className='fas fa-home'></i>
								</Link>
							</div>
							<div className='relative'>
								<Link
									to='/admin/notification'
									className='flex mx-4 text-gray-600 focus:outline-none'
								>
									<i className='far fa-bell'></i>
								</Link>
							</div>

							<div className='relative'>
								<button className='relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none'>
									<img
										className='h-full w-full object-cover'
										src='https://avatars.githubusercontent.com/u/41347210?v=4'
										alt='Your avatar'
									/>
								</button>
							</div>
						</div>
					</header>
					<main className='flex-1 overflow-x-hidden overflow-y-auto  '>
						<div className='container mx-auto px-6 py-8'>{children}</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default AdminLayout;
