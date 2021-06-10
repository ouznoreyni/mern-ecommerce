import React, { useEffect } from 'react';
import Table from './common/Table';

const OrderTable = (props) => {
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
			path: 'code',
			label: 'code',
		},
		{ path: 'user.firstName', label: 'user' },
		{ path: 'orderItems.length', label: 'products' },
		{ path: 'orderItems.length', label: 'Prix Total' },
		{ path: 'created_at', label: 'Date' },
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

	const { orders, onSort, sortColumn } = props;

	return (
		<Table
			data={orders}
			columns={columns}
			onSort={onSort}
			sortColumn={sortColumn}
		/>
	);
};

export default OrderTable;
