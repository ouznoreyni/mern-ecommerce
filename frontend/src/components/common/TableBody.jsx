import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { converTobase64 } from '../../utils/convertTobase64';

const TableBody = (props) => {
	const currentUser = useSelector((state) => state.entities.auth.currentUser);
	const renderCell = (item, column) => {
		if (column.content !== undefined) {
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
					{columns.map(
						(column) =>
							((!column.login && !column.admin) ||
								(column.login && currentUser) ||
								(column.admin && currentUser && currentUser.isAdmin)) && (
								<td
									key={createKey(item, column)}
									className='px-5 py-5 border-b border-gray-200 bg-white text-center text-sm'
								>
									{column.path !== 'image' ? (
										renderCell(item, column)
									) : (
										<div className='flex-shrink-0 w-10 h-10 float-right'>
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
								</td>
							)
					)}
				</tr>
			))}
		</tbody>
	);
};

export default TableBody;

// renderCell = (item, column) => {
//   if (column.content !== undefined) {
//      return column.content(item);
//   } else {
//      return _.get(item, column.path);
//   }
// }

// createKey = (item, column) => {
//   if(!column){
//      return item._id;
//   }else{
//      return item._id + (column.path || column.key);
//   }
// }

// render() {
//
//   return (

//   );
// }
