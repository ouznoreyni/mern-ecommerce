import React from 'react';

const initialValues = {
	telephone: '',
	country: '',
	region: '',
	city: '',
};

const BillingInformations = ({ onChange, values }) => {
	return (
		<form className='px-8 pt-6 pb-8 mb-4 bg-white rounded'>
			<div className='mb-4'>
				<label
					className='block mb-2 text-sm font-bold text-gray-700'
					htmlFor='numberPhone'
				>
					Telephone
				</label>
				<input
					name='telephone'
					className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
					id='telephone'
					type='telephone'
					placeholder='221 77 XXX XX XX'
					onChange={onChange}
					value={values.telephone}
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
					onChange={onChange}
					value={values.country}
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block mb-2 text-sm font-bold text-gray-700'
					htmlFor='country'
				>
					Région*
				</label>
				<input
					type='text'
					name='region'
					id='region'
					className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
					placeholder='Diourbel'
					onChange={onChange}
					value={values.region}
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block mb-2 text-sm font-bold text-gray-700'
					htmlFor='region'
				>
					Ville*
				</label>
				<input
					type='text'
					name='city'
					id='city'
					className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline`}
					placeholder='Diourbel'
					onChange={onChange}
					value={values.city}
				/>
			</div>
		</form>
	);
};

export default BillingInformations;
