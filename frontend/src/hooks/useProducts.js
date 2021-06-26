import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../store/productSlice';

const useProducts = () => {
	const productsSelector = useSelector((state) => state.entities.product);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadProducts());
		return () => {};
	}, [dispatch]);

	return productsSelector;
};

export default useProducts;
