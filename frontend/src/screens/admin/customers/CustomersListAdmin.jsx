import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import Pagination from '../../../components/common/pagination';
import UserTable from '../../../components/UserTable';
import usersService from '../../../services/usersService';

const CustomersListAdmin = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);

	const loadUsers = async (currentPage) => {
		const data = await usersService.getAll(currentPage);
		setUsers(data.data);
		console.log(data);
		setItemsCount(24);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		loadUsers(currentPage);
	};
	useEffect(() => {
		loadUsers();
	}, []);

	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	const handleDelete = () => {};
	const handleSort = () => {};

	return (
		<AdminLayout>
			<div className='py-8'>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
						{/* tables orders */}
						<UserTable
							sortColumn={sortColumn}
							users={users}
							onDelete={handleDelete}
							onSort={handleSort}
						/>
						{/* tables orders */}
						<Pagination
							currentPage={currentPage}
							itemsCount={itemsCount}
							pageSize={pageSize}
							onPageChange={(page) => handlePageChange(page)}
						/>
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default CustomersListAdmin;
