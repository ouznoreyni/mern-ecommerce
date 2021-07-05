import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';

const CartItem = ({ onChange, item }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(item);
		return () => {};
	}, [item]);

	const onIncrementQuantity = (item) => {
		dispatch(addToCart(item.product._id, item.quantity + 1));
		console.log('increment', item.quantity);
	};

	const onDecrementQuantity = (item) => {
		if (item.quantity > 1) {
			dispatch(addToCart(item.product._id, item.quantity - 1));
		}
	};
	return (
		<div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
			<div className='flex w-2/5'>
				<div className='w-20'>
					<img
						className='h-24'
						src='https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z'
						alt=''
					/>
				</div>
				<div className='flex flex-col justify-between ml-4 flex-grow'>
					<span className='font-bold text-sm'>{item.product.title}</span>
					<span className='text-red-500 text-xs'>{item.product.brand}</span>
					<button className='font-semibold hover:text-red-500 text-gray-500 text-xs'>
						Remove
					</button>
				</div>
			</div>
			<div className='flex justify-center w-1/5'>
				<svg
					className='fill-current text-gray-600 w-3 cursor-pointer'
					viewBox='0 0 448 512'
					onClick={() => onDecrementQuantity(item)}
				>
					<path d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
				</svg>

				<input
					className='mx-2 border text-center w-8'
					type='text'
					value={item.quantity}
					onChange={onChange}
				/>

				<svg
					onClick={() => onIncrementQuantity(item)}
					className='fill-current text-gray-600 w-3 cursor-pointer'
					viewBox='0 0 448 512'
				>
					<path d='M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' />
				</svg>
			</div>
			<span className='text-center w-1/5 font-semibold text-sm'>
				{item.product.price}
			</span>
			<span className='text-center w-1/5 font-semibold text-sm'>
				{item.product.price * item.quantity}
			</span>
		</div>
	);
};

export default CartItem;
