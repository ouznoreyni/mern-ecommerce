import React from 'react';
import Table from '../common/Table';

const UserTable = (props) => {
	const columns = [
		{
			path: 'firstName',
			label: 'prenom',
		},
		{ path: 'lastName', label: 'nom' },
		{ path: 'email', label: 'email' },
		{ path: 'isAdmin', label: 'admin' },
		{ path: 'actions', label: 'actions' },
	];

	const { users, onSort, sortColumn } = props;

	return (
		<Table
			data={users}
			columns={columns}
			onSort={onSort}
			sortColumn={sortColumn}
		/>
	);
};

export default UserTable;
