import React from 'react';

const MenuSideBar = () => {
	return (
		<div className='rounded-l-md border-dashed'>
			<div className='flex justify-center items-center text-center font-semibold text-3xl italic'>
				Categories
			</div>
			<ul className='mt-8 border-t'>
				{/* <li>
					<button className='py-3 px-6 font-semibold'>Vetement</button>
				</li>
				<li>
					<button className='py-3 px-6 font-semibold'>Chaussures</button>
				</li>
				<li>
					<button className='py-3 px-6 font-semibold'>Sac</button>
				</li> */}
			</ul>
		</div>
	);
};

export default MenuSideBar;
