import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../store/UserSlice';

const useUsers = (page) => {
	const usersSelector = useSelector((state) => state.entities.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadUsers(page));
	}, [dispatch, page]);
	return usersSelector;
};

export default useUsers;
