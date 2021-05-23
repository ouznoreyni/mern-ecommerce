import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../components/cardProduct';
import Pagination from '../components/common/pagination';
import Header from '../components/header/header';
import MenuSideBar from '../components/menuSideBar';
import productsService from '../services/productsService';
import Footer from './footer';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);

	const loadProducts = async (currentPage) => {
		const data = await productsService.getAll(currentPage);
		setProducts(data.data);
		setItemsCount(24);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		loadProducts(currentPage);
	};
	useEffect(() => {
		loadProducts();
	}, []);
	return (
		<>
			<Header />
			<h1 className='text-3xl'>Liste des produits</h1>
			<div className='grid grid-cols-4 gap-4 mt-10'>
				{/* menu of the sidebar */}
				<div className='xl:col-span-1 lg:col-span-1  col-span-4'>
					<MenuSideBar />
				</div>
				{/* end menu of the sidebar */}
				{/* list products*/}

				<div className='2xl:col-span-3 xl:col-span-3 lg:col-span-3  col-span-4 '>
					<div className='pt-2 relative ml-7 inline-block mx-auto text-gray-600'>
						<input
							className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
							type='search'
							name='search'
							placeholder='Search'
						/>
					</div>
					<div className='inline-block float-right mr-5'>
						<button className='relative text-sm focus:outline-none group mt-4 sm:mt-0'>
							<div className='flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300'>
								<span className='font-medium'>Popular</span>
								<i className='fas fa-caret-down w-4 h-4'></i>
							</div>
							<div className='absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex'>
								<Link
									to='#'
									className='w-full px-4 py-2 text-left hover:bg-gray-200'
								>
									Popular
								</Link>
								{/* <a
                  class="w-full px-4 py-2 text-left hover:bg-gray-200"
                  href="#"
                >
                  Featured
                </a>
                <a
                  class="w-full px-4 py-2 text-left hover:bg-gray-200"
                  href="#"
                >
                  Newest
                </a>
                <a
                  class="w-full px-4 py-2 text-left hover:bg-gray-200"
                  href="#"
                >
                  Lowest Price
                </a>
                <a
                  class="w-full px-4 py-2 text-left hover:bg-gray-200"
                  href="#"
                >
                  Highest Price
                </a> */}
							</div>
						</button>
					</div>
					<div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6  p-8'>
						{products.map((p) => (
							<CardProduct key={p.id} product={p} />
						))}
					</div>
					<Pagination
						currentPage={currentPage}
						itemsCount={itemsCount}
						pageSize={pageSize}
						onPageChange={(page) => handlePageChange(page)}
					/>
				</div>
				{/* end list products*/}
			</div>
			<Footer />
		</>
	);
};

export default Products;
