import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/CartSlice';

const CardProduct = ({ product }) => {
	const dispatch = useDispatch();

	const addCart = async (product) => {
		console.log('product ', product, ' added to the cart');
		dispatch(addToCart(product._id));
	};

	return (
		<div className='shadow-lg p-2 bg-gray-200'>
			<Link
				to={`/products/${product._id}`}
				className='block h-64 rounded-lg shadow-lg bg-gray-600'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`,
					backgroundSize: 'cover',
				}}
			></Link>
			<button
				onClick={() => addCart(product)}
				className='relative float-right bottom-7 bg-green-400 mr-1 text-white'
			>
				Ajouter au panier
			</button>
			<div className='flex items-center justify-between mt-3 w-full'>
				<div>
					<Link to={`/products/${product._id}`} className='font-medium'>
						{product.title}
					</Link>
					<Link className='flex items-center' to='#'>
						<span className='text-xs font-medium text-gray-600'>by</span>
						<span className='text-xs font-medium ml-1 text-indigo-500'>
							{product.brand}
						</span>
					</Link>
				</div>
				<span className='flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded'>
					{product.price}
					<span className='text-xs ml-1 text-red-700'>f cfa</span>
				</span>
			</div>
		</div>
	);
};

export default CardProduct;
