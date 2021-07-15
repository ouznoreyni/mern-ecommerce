import React from 'react';

const ShippingAddress = ({ values, currentUser }) => {
	return (
		<div className='max-w-4xl  bg-white w-full rounded-lg shadow-xl'>
			<div className='p-4 border-b'>
				<h2 className='text-2xl '>Informations de livrasion</h2>
				<p className='text-sm text-gray-500'>
					Personal details and application.
				</p>
			</div>
			<div>
				<div className='md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b'>
					<p className='text-gray-600'>Prenom et nom</p>
					<p>
						{currentUser.firstName} {currentUser.lastName}
					</p>
				</div>
				<div className='md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b'>
					<p className='text-gray-600'>Contact:</p>
					<p>
						{currentUser.email} <br />{' '}
						<span className='mt-2'>{values.telephone}</span>
					</p>
				</div>
				<div className='md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b'>
					<p className='text-gray-600'>Address</p>
					<p>
						{values.country}, {values.region}, {values.city}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ShippingAddress;
