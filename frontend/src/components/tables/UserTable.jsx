import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Table from '../common/Table';

const UserTable = (props) => {
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
			path: 'first_name',
			label: 'prenom',
		},
		{ path: 'last_name', label: 'nom' },
		{ path: 'currentUsername', label: 'nom utilisateur' },
		{ path: 'email', label: 'email' },
		{ path: 'isAdmin', label: 'admin' },
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
