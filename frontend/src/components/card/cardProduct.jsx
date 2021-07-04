import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
	const addCart = async (product) => {
		console.log('product ', product, ' added to the cart');
	};

	return (
		<div className='shadow-lg p-2 '>
			<Link
				to={`/products/${product._id}`}
				className='block h-64 rounded-lg shadow-lg bg-gray-600'
				style={{
					backgroundImage: `url(${product.image})`,
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
