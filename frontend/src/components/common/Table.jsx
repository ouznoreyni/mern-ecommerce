import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({
	columns,
	sortColumn,
	onSort,
	data,
	onGetItem,
	onUpdate,
	onDelete,
}) => {
	return (
		<table className='min-w-full leading-normal'>
			<TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
			<TableBody
				data={data}
				columns={columns}
				onGetItem={onGetItem}
				onUpdate={onUpdate}
				onDelete={onDelete}
			/>
		</table>
	);
};

export default Table;
