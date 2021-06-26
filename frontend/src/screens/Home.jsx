import React, { useEffect, useState } from 'react';
import CardProduct from '../components/card/cardProduct';
import MainLayout from '../components/layout/MainLayout';
import MultiplePoductsSlide from '../components/MultiplePoductsSlide';
import ProductCarousel from '../components/ProductCarousel';
import data from '../data.json';

const Home = () => {
	const [products] = useState(data.products.slice(0, 4));
	const [productsTOp] = useState(data.products.slice(0, 8));
	// const productState = useSelector((state) => state.entities.product.entities);
	// const dispatch = useDispatch();

	useEffect(() => {
		return () => {};
	});

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
				<h2 className='w-full text-center'>Dernières nouveautés</h2>
				<div className='flex content-center'>
					<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-2 2xl:ml-24 p-8'>
						{products.map((p) => (
							<CardProduct key={p._id} product={p} />
						))}
					</div>
				</div>
				<h2 className='w-full text-center mt-4'>Les plus demandés</h2>
				<div className='mx-5'>
					<MultiplePoductsSlide products={productsTOp} />
				</div>
			</div>
			{/* end lastest and top products */}
		</MainLayout>
	);
};

export default Home;
