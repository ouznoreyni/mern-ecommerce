import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { converTobase64 } from '../utils/convertTobase64';

const ProductOrder = () => {
	const [totalProduct, setTotalProduct] = useState();
	const cartSelector = useSelector((state) => state.entities.cart);

	useEffect(() => {
		setTotalProduct(calculateTotalProduct(cartSelector));
		return () => {};
	}, [cartSelector]);

	const calculateTotalProduct = (cartSelector) => {
		let total = 0;
		cartSelector.list.cartItems.map((item) => {
			const { product, quantity } = item;
			total += product.price * quantity;
			return item;
		});
		return total;
	};

	return (
		<div className='flex justify-center lg:justify-end'>
			<div className='border rounded-md max-w-md w-full px-4 py-3'>
				<div className='flex items-center justify-between'>
					<h3 className='text-gray-700 font-medium'>
						Order total {cartSelector.list.cartItems.length}
					</h3>
					<span className='text-gray-600 text-sm'>Edit</span>
				</div>
				{cartSelector.list.cartItems.map((item) => (
					<div className='flex justify-between mt-6'>
						<div className='flex'>
							<img
								className='h-20 w-20 object-cover rounded'
								src={`data:image/jpeg;base64,${converTobase64(item.product)}`}
								alt={item.product.title}
							/>
							<div className='mx-3'>
								<h3 className='text-sm text-gray-600'>{item.product.title}</h3>
								<div className='flex items-center mt-2'>
									<button className='text-gray-500 focus:outline-none focus:text-gray-600'>
										{/* <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
									</button>
									<span className='text-gray-700 mx-2'>
										{item.quantity} * {item.product.price} cfa
									</span>
									<button className='text-gray-500 focus:outline-none focus:text-gray-600'>
										{/* <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
									</button>
								</div>
							</div>
						</div>
						<span className='text-gray-600'>
							{item.product.price * item.quantity}
						</span>
					</div>
				))}
				<hr className='mt-3' />
				<div className='flex justify-between'>
					<div className='flex'>Total</div>
					<span className='text-gray-600'>{totalProduct}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductOrder;
