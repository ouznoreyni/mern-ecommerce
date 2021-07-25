import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/CartSlice';
import { converTobase64 } from '../../utils/convertTobase64';

const CardProduct = ({ product }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		converTobase64(product);
		return () => {};
	}, [product]);

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
					backgroundImage: `url(data:image/jpeg;base64,${converTobase64(
						product
					)})`,
					backgroundSize: 'cover',
				}}
			></Link>
			{/* <img
				src={`data:image/jpeg;base64,${converTobase64(product)}`}
				alt='holl'
			/> */}
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
