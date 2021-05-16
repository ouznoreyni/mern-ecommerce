import React from 'react';

const TableHeader = (props) => {
	const raiseSort = (path) => {
		const sortColumn = { ...props.sortColumn };
		if (sortColumn.path === path) {
			sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		} else {
			sortColumn.path = path;
			sortColumn.order = 'asc';
		}
		props.onSort(sortColumn);
	};

	const renderSortIcon = (column) => {
		const { sortColumn } = props;

		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === 'asc') return <i class='fas fa-sort-up'></i>;
		return <i class='fas fa-sort-down'></i>;
	};
	const { columns } = props;
	return (
		<thead>
			<tr className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
				{columns.map((column) => {
					return (
						<th
							className='clickable'
							key={column.path || column.key}
							onClick={() => raiseSort(column.path)}
						>
							{column.label} {renderSortIcon(column)}
						</th>
					);
				})}
			</tr>
		</thead>
	);
};

export default TableHeader;
