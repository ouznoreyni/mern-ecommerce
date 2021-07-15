import React from 'react';

const BillingInformations = () => {
	return (
		<div>
			<form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='numberPhone'
					>
						Telephone
					</label>
					<input
						name='numberPhone'
						className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
						id='numberPhone'
						type='numberPhone'
						placeholder='221 77 XXX XX XX'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='country'
					>
						Pays/région *
					</label>
					<input
						type='text'
						name='country'
						id='country'
						className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
						placeholder='Senegal'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='country'
					>
						Région / Département *
					</label>
					<input
						type='text'
						name='country'
						id='country'
						className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
						placeholder='Diourbel'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block mb-2 text-sm font-bold text-gray-700'
						htmlFor='country'
					>
						Ville
					</label>
					<input
						type='text'
						name='country'
						id='country'
						className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
						placeholder='Diourbel'
					/>
				</div>
			</form>
		</div>
	);
};

export default BillingInformations;
