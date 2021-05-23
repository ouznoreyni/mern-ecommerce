import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/adminLayout/AdminLayout';
import Pagination from '../../../components/common/pagination';
import ProductTable from '../../../components/ProductTable';
import productsService from '../../../services/productsService';

const ProductListAdmin = () => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
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
