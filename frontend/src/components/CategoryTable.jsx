import React, { useEffect } from 'react';
import Table from './common/Table';

const CategoryTable = (props) => {
	const auth = {};
	useEffect(() => {
		try {
			const user = auth.getCurrentUser();
			if (user && user.isAdmin) columns.push(addDeleteColumn());
		} catch (error) {
			console.log(error);
		}
	});

	const columns = [
		{ path: 'name', label: 'name' },
		{ path: 'created_at', label: 'ajouté' },
	];

	const addDeleteColumn = () => {
		return {
			key: 'supprimer',
			content: (product) => (
				<button
					onClick={() => props.onDelete(product._id)}
					className='btn btn-danger'
				>
					supprimer
				</button>
			),
		};
	};

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
