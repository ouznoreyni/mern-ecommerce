import React from 'react';
import Table from '../common/Table';

const OrderTable = (props) => {
	const columns = [
		{
			path: 'code',
			label: 'code',
		},
		{ path: 'user.firstName', label: 'user' },
		{ path: 'orderItems.length', label: 'products' },
		{ path: 'orderItems.length', label: 'Prix Total' },
		{ path: 'created_at', label: 'Date' },
		{ path: 'actions', label: 'actions' },
	];

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
