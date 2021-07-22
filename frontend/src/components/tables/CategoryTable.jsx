import React from 'react';
import Table from '../common/Table';

const CategoryTable = (props) => {
	// const currentUser = useSelector((state) => state.entities.auth.currentUser);
	// useEffect(() => {
	// 	try {
	// 		if (currentUser && currentUser.isAdmin) columns.push(addDeleteColumn());
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });

	const columns = [
		{ path: 'name', label: 'name' },
		{ path: 'createdAt', label: 'ajouté' },
		{ path: 'actions', label: 'actions' },
	];

	const { categories, onSort, sortColumn } = props;

	return (
		<Table
			data={categories}
			columns={columns}
			onSort={onSort}
			sortColumn={sortColumn}
		/>
	);
};

export default CategoryTable;
