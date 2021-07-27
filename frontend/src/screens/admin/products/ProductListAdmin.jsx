import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminLayout from '../../../components/admin/AdminLayout';
import Pagination from '../../../components/common/Pagination';
import ProductTable from '../../../components/tables/ProductTable';
import useProducts from '../../../hooks/useProducts';
import { loadProducts } from '../../../store/ProductSlice';

const ProductListAdmin = () => {
	const history = useHistory();
	const productsSelector = useProducts();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);
	const dispatch = useDispatch();
	const [isMounted, setisMounted] = useState(false);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		dispatch(loadProducts(page));
	};

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	useEffect(() => {
		const { params } = productsSelector.list;
		if (params) {
			setCurrentPage(params.page);
			setItemsCount(params.totalProducts);
		}

		return () => {
			setisMounted(true);
		};
	}, [dispatch, isMounted, productsSelector]);
	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	const handleDelete = async (product) => {
		console.log('product ', product);
		const { isConfirmed } = await Swal.fire({
			title: 'Suppression',
			text: `Voullez vous supprimer le produit ${product.title}`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Oui',
			cancelButtonText: 'Non',
		});
		console.log('res ', isConfirmed);
	};
	const handleSort = () => {};
	const handleUpdate = (product) => {
		history.push(`/admin/products/${product._id}/edit`);
	};
	const handleGetItem = (product) => {
		console.log('get product ', product._id);
		history.push(`/admin/products/${product._id}`);
	};

	return (
		<AdminLayout>
			<div className='py-8'>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<Link
						className='float-right text-center rounded-r-lg bg-gray-600  text-white font-bold p-4 md:w-3/12 w-1/2 uppercase border-gray-600 border-t border-b border-r mb-2'
						to='/admin/products/add'
					>
						ajouter
					</Link>
					<div className='inline-block min-w-full shadow-2xl rounded-lg overflow-hidden'>
						{!productsSelector.list.products ? (
							'loading'
						) : (
							<>
								{/* tables products */}
								<ProductTable
									sortColumn={sortColumn}
									products={productsSelector.list.products}
									onDelete={handleDelete}
									onSort={handleSort}
									onUpdate={handleUpdate}
									onGetItem={handleGetItem}
								/>
								{/* tables products */}
								<Pagination
									currentPage={currentPage}
									itemsCount={itemsCount}
									pageSize={pageSize}
									onPageChange={(page) => handlePageChange(page)}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</AdminLayout>
	);
};

export default ProductListAdmin;
