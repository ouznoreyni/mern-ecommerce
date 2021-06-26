import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from './common/Table';

const ProductTable = (props) => {
	const currentUser = useSelector((state) => state.entities.auth.currentUser);
	useEffect(() => {
		try {
			if (currentUser && currentUser.isAdmin) columns.push(addDeleteColumn());
		} catch (error) {
			console.log(error);
		}
	});

	const columns = [
		{
			path: 'image',
			label: 'image',
		},
		{ path: 'title', label: 'title' },
		{ path: 'countInStock', label: 'Stock' },
		{ path: 'price', label: 'prix' },
		{ path: 'category', label: 'categorie' },
		{ path: 'createdAt', label: 'ajouté' },
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
