import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/ProductSlice';

const useProducts = () => {
	const dispatch = useDispatch();
	const productsSelector = useSelector((state) => state.entities.product);

	useEffect(() => {
		dispatch(loadProducts());
		return () => {};
	}, [dispatch]);

	return productsSelector;
};

export default useProducts;
