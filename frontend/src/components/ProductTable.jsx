import React, { useEffect } from 'react';
import Table from './common/Table';

const ProductTable = (props) => {
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
		{
			path: 'image',
			label: 'image',
		},
		{ path: 'name', label: 'name' },
		{ path: 'count_in_stock', label: 'Stock' },
		{ path: 'price', label: 'prix' },
		{ path: 'category_id.name', label: 'categorie' },
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

	const { products, onSort, sortColumn } = props;

	return (
		<Table
			data={products}
			columns={columns}
			onSort={onSort}
			sortColumn={sortColumn}
		/>
	);
};

export default ProductTable;
