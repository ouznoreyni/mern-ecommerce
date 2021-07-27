import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { converTobase64 } from '../../utils/convertTobase64';

const TableBody = (props) => {
	// const currentUser = useSelector((state) => state.entities.auth.currentUser);

	const renderCell = (item, column) => {
		if (column.content !== undefined) {
			console.log('content ', column);

			return column.content(item);
		} else {
			return _.get(item, column.path);
		}
	};

	const createKey = (item, column) => {
		if (!column) {
			return item._id;
		} else {
			return item._id + (column.path || column.key);
		}
	};

	const { data, columns } = props;
	console.log('data ', data);
	return (
		<tbody className='p-2'>
			{data.map((item) => (
				<tr key={createKey(item)}>
					{columns.map((column) => (
						<td
							key={createKey(item, column)}
							className='px-5 py-5 border-b border-gray-200 bg-white text-center text-sm'
						>
							{column.path === 'image' && (
								<div className='flex-shrink-0 w-10 h-10 center'>
									<img
										className='w-full h-full rounded-full '
										// src={renderCell(item, column)}
										src={`data:image/jpeg;base64,${converTobase64(
											renderCell(item, column)
										)}`}
										alt='produit'
									/>
								</div>
							)}
							{column.path !== 'image' &&
								column.path !== 'actions' &&
								column.path !== 'createdAt' &&
								column.path !== 'isAdmin' &&
								renderCell(item, column)}

							{column.path === 'createdAt' &&
								moment(item.createdAt).subtract(10, 'days').calendar()}

							{column.path === 'isAdmin' && item.isAdmin && (
								<span>
									<i class='fas fa-check-circle text-green-400'></i>
								</span>
							)}

							{column.path === 'isAdmin' && !item.isAdmin && (
								<span>
									<i class='far fa-times-circle text-red-500'></i>
								</span>
							)}
							{column.path === 'actions' && (
								<>
									<button
										onClick={() => props.onGetItem(item)}
										className='bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out'
									>
										details
									</button>
									<button
										className='bg-yellow-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-yellow-600 transition duration-200 each-in-out'
										onClick={() => props.onUpdate(item)}
									>
										modifier
									</button>
									<button
										className='bg-red-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-red-600 transition duration-200 each-in-out'
										onClick={() => props.onDelete(item)}
									>
										supprimer
									</button>
								</>
							)}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;
