import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import CategoryTable from '../../../components/tables/CategoryTable';
import Pagination from '../../../components/common/Pagination';
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
						<div className='w-full mb-2'>
							<form class='flex'>
								<input
									className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-11/12'
									placeholder='Ajouter un categorie : vetement pour homme'
								/>
								<button className='px-8 rounded-r-lg bg-green-500 hover:bg-green-700  text-white font-bold p-4 uppercase border-green-700 border-t border-b border-r'>
									Ajouter une categorie
								</button>
							</form>
						</div>
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
