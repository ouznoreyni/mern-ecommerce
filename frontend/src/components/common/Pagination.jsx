import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Pagination = (props) => {
	const { currentPage, itemsCount, pageSize, onPageChange } = props;
	const pagesCount = Math.ceil(itemsCount / pageSize);
	if (pagesCount === 1) return null;

	const pages = _.range(1, pagesCount + 1);

	return (
		<div className='flex justify-center my-10 space-x-1 '>
			<button
				className='flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200'
				disabled={currentPage === 1}
				onClick={() => onPageChange(1)}
			>
				<i className='fas fa-angle-double-left h-5 w-5'></i>
			</button>
			<button
				className='flex items-center justify-center h-8 px-2 rounded text-sm font-medium hover:bg-indigo-200'
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Precedent
			</button>
			{pages.map((page) => {
				return (
					<span
						key={page}
						className={page === currentPage ? 'page-item active' : 'page-item'}
					>
						<button
							className='flex items-center justify-center h-8 w-8 rounded text-sm font-medium text-indigo-600 hover:bg-indigo-200'
							onClick={() => onPageChange(page)}
						>
							{page}
						</button>
					</span>
				);
			})}
			{/* <button
				className='flex items-center justify-center h-8 w-8 rounded bg-indigo-200 text-sm font-medium text-indigo-600'
				disabled
			>
				1
			</button>
			<button className='flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'>
				2
			</button>
			<button className='flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200 text-sm font-medium text-gray-600 hover:text-indigo-600'>
				3
			</button> */}
			<button
				className='flex items-center justify-center h-8 px-2 rounded hover:bg-indigo-200 text-sm font-medium  hover:text-indigo-600'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === pagesCount}
			>
				suivant
			</button>
			<button
				className='flex items-center justify-center h-8 w-8 rounded hover:bg-indigo-200  hover:text-indigo-600'
				disabled={currentPage === pagesCount}
				onClick={() => onPageChange(pagesCount)}
			>
				<i className='fas fa-angle-double-right h-5 w-5'></i>
			</button>
		</div>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	itemsCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
