import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import productsService from '../services/ProductsService';
import { converTobase64 } from '../utils/convertTobase64';

const ProductDetails = (props) => {
	const [product, setProduct] = useState({});
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const getProduct = async (id) => {
			try {
				const { data } = await productsService.retrieve(id);
				console.log('data ', data);
				setProduct(data.product);
			} catch (error) {
				history.push('/not-found');
			}
		};
		getProduct(id);
	}, []);

	useEffect(() => {
		console.log('prod', product);
		return () => {};
	}, []);
	return (
		<MainLayout>
			{' '}
			<div className='py-6'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center space-x-2 text-gray-400 text-sm'>
						<Link
							to='/products'
							className='hover:underline hover:text-gray-600'
						>
							produits
						</Link>
						<span>
							<i className='fas fa-chevron-right h-5 w-5 leading-none text-gray-300'></i>
						</span>
						<Link to='#' className='hover:underline hover:text-gray-600'>
							{/* {product.category.name} */}
							category
						</Link>
						<span>
							<i className='fas fa-chevron-right h-5 w-5 leading-none text-gray-300'></i>
						</span>
						<span>{product.brand}</span>
					</div>
				</div>

				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10'>
					<div className='flex flex-col md:flex-row -mx-4'>
						<div className='md:flex-1 px-4'>
							<div>
								<div className='h-64 md:h-80 rounded-lg bg-gray-100 mb-4'>
									<div
										className='h-64 md:h-80 rounded-lg  mb-4 flex items-center justify-center'
										style={{
											backgroundImage: `url(data:image/jpeg;base64,${converTobase64(
												product
											)})`,
											backgroundSize: 'cover',
										}}
									></div>
								</div>

								<div className='flex -mx-2 mb-4'>
									<template>
										<div className='flex-1 px-2'>
											<button className='focus:outline-none w-full rounded-lg h-24 md:h-32  flex items-center justify-center'>
												<span className='text-2xl'></span>
											</button>
										</div>
									</template>
								</div>
							</div>
						</div>
						<div className='md:flex-1 px-4'>
							<h2 className='mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl'>
								{product.name}
							</h2>
							<p className='text-gray-500 text-sm'>
								marque{' '}
								<Link to='#' className='text-indigo-600 hover:underline'>
									{product.brand}
								</Link>
							</p>

							<div className='flex items-center space-x-4 my-4'>
								<div>
									<div className='rounded-lg bg-gray-100 flex py-2 px-3'>
										<span className='font-bold text-indigo-600 text-3xl'>
											{product.price}
										</span>
										<span className='text-indigo-400 ml-1 mt-1'>f cfa</span>
									</div>
								</div>
								<div className='flex-1'>
									<p className='text-green-500 text-xl font-semibold'>2%</p>
									<p className='text-gray-400 text-sm'>reduction</p>
								</div>
							</div>

							<p className='text-gray-500'>{product.description}</p>

							<div className='flex py-4 space-x-4'>
								<div className='relative'>
									<div className='text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold'>
										Qty
									</div>
									<select className='cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1'>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>

								<button
									type='button'
									className='h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white'
								>
									Ajouter au panier
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default ProductDetails;
