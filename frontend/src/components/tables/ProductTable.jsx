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

	const onDelete = (item) => {
		console.log('deleted ', item);
	};
	const onGetItem = (item) => {
		console.log('onGetItem ', item);
	};
	const onUpdate = (item) => {
		console.log('onUpdate ', item);
	};

	const { products, onSort, sortColumn } = props;

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
