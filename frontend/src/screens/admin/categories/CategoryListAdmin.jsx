import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AdminLayout from '../../../components/admin/AdminLayout';
import Pagination from '../../../components/common/Pagination';
import CategoryTable from '../../../components/tables/CategoryTable';
import useCategories from '../../../hooks/useCategories';
import { addcategory, loadcategories } from '../../../store/CategorySlice';

const CategoryListAdmin = () => {
	const [dataCategory, setdataCategory] = useState();
	const categoriesSelector = useCategories();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);
	const dispatch = useDispatch();
	const [isMounted, setisMounted] = useState(false);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		dispatch(loadcategories(page));
	};

	useEffect(() => {
		dispatch(loadcategories());
	}, [dispatch]);
	useEffect(() => {
		const { params } = categoriesSelector.list;
		if (params) {
			setCurrentPage(params.page);
			setItemsCount(params.totalProducts);
		}

		return () => {
			setisMounted(true);
		};
	}, [dispatch, isMounted, categoriesSelector]);

	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	const handleDelete = () => {};
	const handleSort = () => {};
	const handleSubit = (e) => {
		e.preventDefault();
		if (dataCategory.length < 3) {
			alert('mininum 3 caractere');
		}

		dispatch(addcategory({ name: dataCategory }));
		setdataCategory('');
	};

	return (
		<AdminLayout>
			<div className='py-8'>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
						{/* tables categories */}
						<div className='w-full mb-2'>
							<form className='flex' onSubmit={handleSubit} method='post'>
								<input
									className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-11/12'
									placeholder='Ajouter un categorie : vetement pour homme'
									onChange={(e) => setdataCategory(e.target.value)}
								/>
								<button className='px-8 rounded-r-lg bg-green-500 hover:bg-green-700  text-white font-bold p-4 uppercase border-green-700 border-t border-b border-r'>
									Ajouter une categorie
								</button>
							</form>
						</div>
						<CategoryTable
							sortColumn={sortColumn}
							categories={categoriesSelector.list.categories}
							onDelete={handleDelete}
							onSort={handleSort}
						/>
						{/* tables categories */}
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

export default CategoryListAdmin;
