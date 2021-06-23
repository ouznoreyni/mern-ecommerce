import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../components/admin/AdminLayout';
import Pagination from '../../../components/common/pagination';
import ProductTable from '../../../components/ProductTable';
import productsService from '../../../services/productsService';

const ProductListAdmin = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);

	const loadProducts = async (currentPage) => {
		const data = await productsService.getAll(currentPage);
		setProducts(data.data);
		setItemsCount(24);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		loadProducts(currentPage);
	};
	useEffect(() => {
		loadProducts();
	}, []);
	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	const handleDelete = () => {};
	const handleSort = () => {};

	return (
		<AdminLayout>
			<div className='py-8'>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<Link
						class='float-right text-center rounded-r-lg bg-gray-600  text-white font-bold p-4 md:w-3/12 w-1/2 uppercase border-gray-600 border-t border-b border-r mb-2'
						to='/admin/products/add'
					>
						ajouter
					</Link>
					<div className='inline-block min-w-full shadow-2xl rounded-lg overflow-hidden'>
						{/* tables products */}
						<ProductTable
							sortColumn={sortColumn}
							products={products}
							onDelete={handleDelete}
							onSort={handleSort}
						/>
						{/* tables products */}
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

export default ProductListAdmin;
