import React, { useEffect, useState } from 'react';
import Pagination from '../../components/common/pagination';
import MainLayout from '../../components/layout/mainLayout';
import OrderTable from '../../components/OrderTable';
import ordersService from '../../services/orderService';

const Order = () => {
	const [orders, setOrders] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const [itemsCount, setItemsCount] = useState(10);

	const loadOrders = async (currentPage) => {
		const data = await ordersService.getAll(currentPage);
		setOrders(data.data);
		console.log(data);
		setItemsCount(24);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		loadOrders(currentPage);
	};
	useEffect(() => {
		loadOrders();
	}, []);

	const [sortColumn] = useState({ path: 'title', order: 'asc' });

	const handleDelete = () => {};
	const handleSort = () => {};

	return (
		<MainLayout>
			<div className='py-8'>
				<h2>Mes commandes</h2>
				<div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
					<div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
						{/* tables orders */}
						<OrderTable
							sortColumn={sortColumn}
							orders={orders}
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
		</MainLayout>
	);
};

export default Order;
