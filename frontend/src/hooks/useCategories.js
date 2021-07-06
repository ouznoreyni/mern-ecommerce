import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadcategories } from '../store/CategorySlice';

const useCategories = () => {
	const categoriesSelector = useSelector((state) => state.entities.category);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadcategories());
		return () => {};
	}, [dispatch]);

	return categoriesSelector;
};

export default useCategories;
