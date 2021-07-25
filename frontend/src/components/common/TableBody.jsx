import _ from 'lodash';
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
	console.log(data);
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
								renderCell(item, column)}

							{column.path === 'actions' && (
								<>
									<button
										onClick={() => props.onGetItem(item)}
										className='mr-1'
									>
										details
									</button>
									<button onClick={() => props.onUpdate(item)} className='mr-1'>
										modifier
									</button>
									<button onClick={() => props.onDelete(item)}>
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
