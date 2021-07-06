import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import Pagination from '../../../components/common/Pagination';
import UserTable from '../../../components/tables/UserTable';
import useUsers from '../../../hooks/useUsers';

const UsersListAdmin = () => {
	const userSelector = useUsers();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [itemsCount] = useState(10);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
	useEffect(() => {
		console.log('user=>', userSelector);
		// loadUsers();
	}, [userSelector]);

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
							users={userSelector.list.users}
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

export default UsersListAdmin;
