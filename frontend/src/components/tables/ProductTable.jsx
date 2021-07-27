import React from 'react';
import Table from '../common/Table';

const ProductTable = (props) => {
	const columns = [
		{
			path: 'image',
			label: 'image',
		},
		{ path: 'title', label: 'title' },
		{ path: 'countInStock', label: 'Stock' },
		{ path: 'price', label: 'prix' },
		{ path: 'category.name', label: 'categorie' },
		{ path: 'createdAt', label: 'ajouté' },
		{ path: 'actions', label: 'actions' },
	];

	const { products, onSort, sortColumn, onUpdate, onDelete, onGetItem } = props;

	return (
		<Table
			data={products}
			columns={columns}
			onSort={onSort}
			sortColumn={sortColumn}
			onDelete={onDelete}
			onGetItem={onGetItem}
			onUpdate={onUpdate}
		/>
	);
};

export default ProductTable;
