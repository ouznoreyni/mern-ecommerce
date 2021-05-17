import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/adminLayout/AdminLayout';
import Pagination from '../../../components/pagination';
import ProductTable from '../../../components/ProductTable';
import { products as data } from '../../../data.json';
const ProductListAdmin = () => {
	const [products, setProducts] = useState([]);
	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	useEffect(() => {
		setProducts(data);
	}, [products]);

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
						<Pagination />
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default ProductListAdmin;
