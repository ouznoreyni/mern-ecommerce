import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/adminLayout/AdminLayout';
import CategoryTable from '../../../components/CategoryTable';
import Pagination from '../../../components/pagination';
import { categories as data } from '../../../data.json';
const CategoryListAdmin = () => {
	const [categories, setcategories] = useState([]);
	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	useEffect(() => {
		setcategories(data);
	}, [categories]);

	const handleDelete = () => {};
	const handleSort = () => {};

	return (
		<AdminLayout>
			<div className='py-8'>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
						{/* tables categories */}
						<CategoryTable
							sortColumn={sortColumn}
							categories={categories}
							onDelete={handleDelete}
							onSort={handleSort}
						/>
						{/* tables categories */}
						<Pagination />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default CategoryListAdmin;
