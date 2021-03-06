import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/card/CartItem';
import MainLayout from '../components/layout/MainLayout';
import { clearItemCart } from '../store/CartSlice';

const Cart = () => {
	const [totalProduct, setTotalProduct] = useState();
	const dispatch = useDispatch();
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

	const handleClearCart = () => {
		dispatch(clearItemCart());
	};

	return (
		<MainLayout>
			<div className='container mx-auto mt-10'>
				{cartSelector.list.cartItems.length > 0 ? (
					<div className='flex shadow-md my-10'>
						<div className='w-3/4 bg-white px-10 py-10'>
							<div className='flex justify-between border-b pb-8'>
								<h1 className='font-semibold text-2xl'>Mes Achats</h1>
								<h2 className='font-semibold text-2xl'>
									{cartSelector.list.cartItems.length} produit
								</h2>
							</div>
							<div className='flex mt-10 mb-5'>
								<h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>
									Produit
								</h3>
								<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 '>
									Quantité
								</h3>
								<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 '>
									Prix
								</h3>
								<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/5 '>
									Total
								</h3>
							</div>
							{cartSelector.list.cartItems.map((item) => (
								<CartItem
									onChange={() => null}
									key={item.product._id}
									item={item}
								/>
							))}

							<div className='flex 1'>
								<Link
									to='/products'
									className='flex flex-1 font-semibold text-indigo-600 text-sm mt-10'
								>
									<svg
										className='fill-current mr-2 text-indigo-600 w-4'
										viewBox='0 0 448 512'
									>
										<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
									</svg>
									Continuer mes achats
								</Link>

								<button
									onClick={handleClearCart}
									className='flex font-semibold text-red-600 text-sm mt-10'
								>
									Vider mon panier
								</button>
							</div>
						</div>

						<div id='summary' className='w-1/4 px-8 py-10'>
							<h1 className='font-semibold text-2xl border-b pb-8'>
								Récapitulatif de la commande
							</h1>
							<div className='flex justify-between mt-10 mb-5'>
								<span className='font-semibold text-sm uppercase'>
									{cartSelector.list.cartItems.length} produits
								</span>
								<span className='font-semibold text-sm'></span>
							</div>

							<div className='border-t mt-8'>
								<div className='flex font-semibold justify-between py-6 text-sm uppercase'>
									<span>Coût total</span>
									<span>{totalProduct} franc cfa</span>
								</div>
								<Link to='/checkout'>
									<button className='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
										Valider la commande
									</button>
								</Link>
							</div>
						</div>
					</div>
				) : (
					<div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full'>
						<img
							src='assets/img/empty-cart.png'
							width='500'
							alt='cart is empty'
							className='flex-wrap'
						/>
						<div>
							<h2 className='center'>
								Vous n'avez pas des products dans votre panier
							</h2>
							<p>
								Veuillez faire vos achats <Link to='/products'>ici</Link>
							</p>
						</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
};

export default Cart;
