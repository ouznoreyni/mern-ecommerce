import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
	console.log(product);
	return (
		<div>
			<Link
				to={`/products/${product.id}`}
				className='block h-64 rounded-lg shadow-lg bg-gray-600'
				style={{
					backgroundImage: `url(${product.image})`,
					backgroundSize: 'cover',
				}}
			></Link>

			<div className='flex items-center justify-between mt-3'>
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
