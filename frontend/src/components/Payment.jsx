import React from 'react';

const Payment = ({ onChange, handleCheckout }) => {
	return (
		<div className='mt-8 lg:w-3/4 bg-gray-100'>
			<div className='min-w-screen py-5 px-5'>
				<div className='w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700'>
					<div className='w-full pt-1 pb-5'>
						<div className='topHeader text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center'>
							<i className='mdi mdi-credit-card-outline text-3xl'></i>
						</div>
					</div>
					<div className='mb-10'>
						<h1 className='text-center font-bold text-xl uppercase'>
							Paiement securisé
						</h1>
					</div>
					<div className='mb-3 flex -mx-2'>
						<div className='px-2'>
							<label for='type1' className='flex items-center cursor-pointer'>
								<input
									type='radio'
									className='form-radio h-5 w-5 text-indigo-500'
									name='type'
									id='type1'
									checked
									onChange={onChange}
								/>
								<img
									src='https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png'
									className='h-8 ml-3'
									alt='image1'
								/>
							</label>
						</div>
						<div className='px-2'>
							<label for='type2' className='flex items-center cursor-pointer'>
								<input
									type='radio'
									className='form-radio h-5 w-5 text-indigo-500'
									name='type'
									id='type2'
									onChange={onChange}
								/>
								<img
									src='https://www.sketchappsources.com/resources/source-image/PayPalCard.png'
									className='h-8 ml-3'
									alt='image2'
								/>
							</label>
						</div>
					</div>
					<div className='mb-3'>
						<label className='font-bold text-sm mb-2 ml-1'>Name on card</label>
						<div>
							<input
								className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
								placeholder='John Smith'
								type='text'
								onChange={onChange}
							/>
						</div>
					</div>
					<div className='mb-3'>
						<label className='font-bold text-sm mb-2 ml-1'>Card number</label>
						<div>
							<input
								className='w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
								placeholder='0000 0000 0000 0000'
								type='text'
								onChange={onChange}
							/>
						</div>
					</div>
					<div className='mb-3 -mx-2 flex items-end'>
						<div className='px-2 w-1/2'>
							<label className='font-bold text-sm mb-2 ml-1'>
								Expiration date
							</label>
							<div>
								<select
									onChange={onChange}
									className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'
								>
									<option value='01'>01 - January</option>
									<option value='02'>02 - February</option>
									<option value='03'>03 - March</option>
									<option value='04'>04 - April</option>
									<option value='05'>05 - May</option>
									<option value='06'>06 - June</option>
									<option value='07'>07 - July</option>
									<option value='08'>08 - August</option>
									<option value='09'>09 - September</option>
									<option value='10'>10 - October</option>
									<option value='11'>11 - November</option>
									<option value='12'>12 - December</option>
								</select>
							</div>
						</div>
						<div className='px-2 w-1/2'>
							<select
								onChange={onChange}
								className='form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer'
							>
								<option value='2020'>2020</option>
								<option value='2021'>2021</option>
								<option value='2022'>2022</option>
								<option value='2023'>2023</option>
								<option value='2024'>2024</option>
								<option value='2025'>2025</option>
								<option value='2026'>2026</option>
								<option value='2027'>2027</option>
								<option value='2028'>2028</option>
								<option value='2029'>2029</option>
							</select>
						</div>
					</div>
					<div className='mb-10'>
						<label className='font-bold text-sm mb-2 ml-1'>Security code</label>
						<div>
							<input
								className='w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors'
								placeholder='000'
								type='text'
								onChange={onChange}
							/>
						</div>
					</div>
					<div>
						<button
							onClick={handleCheckout}
							className='block w-full max-w-xs mx-auto hover:bg-green-300  text-white rounded-lg px-3 py-3 font-semibold topHeader border-green-300 border-2'
						>
							<i className='mdi mdi-lock-outline mr-1'></i> PAY NOW
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;