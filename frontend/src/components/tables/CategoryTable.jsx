import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from '../common/Table';

const CategoryTable = (props) => {
	const currentUser = useSelector((state) => state.entities.auth.currentUser);
	useEffect(() => {
		try {
			if (currentUser && currentUser.isAdmin) columns.push(addDeleteColumn());
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
