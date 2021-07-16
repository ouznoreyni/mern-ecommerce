import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../components/card/cardProduct';
import MainLayout from '../components/layout/MainLayout';
import ProductCarousel from '../components/ProductCarousel';
import { getTopProduct, loadProducts } from '../store/ProductSlice';
const Home = () => {
	const dispatch = useDispatch();
	const topProductsSelector = useSelector(
		(state) => state.entities.product.topProducts
	);
	const productsSelector = useSelector(
		(state) => state.entities.product.list.products
	);
	// const [products] = useState(data.products.slice(0, 4));
	// const [productsTOp] = useState(data.products.slice(0, 8));
	// const productState = useSelector((state) => state.entities.product.entities);
	// const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadProducts());
		return () => {};
	}, [dispatch]);

	useEffect(() => {
		dispatch(getTopProduct());
		return () => {};
	}, [dispatch]);

	return (
		<MainLayout>
			{/* slide des produits */}
			<div className='container mx-auto'>
				<ProductCarousel />
			</div>
			{/* slide des produits */}
			{/* info and satisfaction */}
			<div className='grid grid-flow-col grid-cols-4 grid-rows-1 gap-4 mt-10 p-5 border-2  w-full lg:w-4/5 lg:ml-24 xl:w-4/5 xl:ml-24 2xl:w-4/5 2xl:ml-24'>
				<div className='border-r-2'>
					<h6 className='font-bold text-xs'>BONUS PLUS</h6>
					<p className='text-xs'>
						Obtenez un bonus en achetant plus de trois produits
					</p>
				</div>
				<div className='border-r-2'>
					<h6 className='font-bold text-xs'>LIVRAISON GRATUITE</h6>
					<p className='text-xs'>
						Livraison gratuite sur toutes les commandes de plus de 50000 fc
					</p>
				</div>
				<div className='border-r-2'>
					<h6 className='font-bold text-xs'>GARANTIE DE REMBOURSEMENT</h6>
					<p className='text-xs'>Garantie de remboursement à 100%</p>
				</div>
				<div>
					<h6 className='font-bold text-xs'>SUPPORT EN LIGNE 24/7</h6>
					<p className='text-xs'>Appelez-nous : +221 77 800 00 00</p>
				</div>
			</div>
			{/* info and satisfaction */}
			{/* lastest and top products */}
			<div className='mt-5'>
				<h2 className='w-full text-center text-4xl'>Dernières nouveautés</h2>
				<div className='flex content-center'>
					<div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-2 2xl:ml-24 p-8'>
						{productsSelector.map((p) => (
							<CardProduct key={p._id} product={p} />
						))}
					</div>
				</div>
				<hr />
				<h2 className='w-full text-center mt-14 text-4xl'>Les plus demandés</h2>
				<div className='flex content-center'>
					{/* <MultiplePoductsSlide products={productsTOp} /> */}
					<div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-2 2xl:ml-24 p-8'>
						{topProductsSelector.map((p) => (
							<CardProduct key={p._id} product={p} />
						))}
					</div>
				</div>
			</div>
			{/* end lastest and top products */}
		</MainLayout>
	);
};

export default Home;
