import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Required').min(5).max(150),
	brand: Yup.string().required('Required').min(5).max(50),
	description: Yup.string().required('Required'),
	price: Yup.number().required('Required').min(500),
	count_in_stock: Yup.number().required('Required'),
	category_id: Yup.number().required('Required'),
	image: Yup.mixed(),
});

const initialValues = {
	name: '',
	brand: '',
	description: '',
	price: '',
	count_in_stock: '',
	category_id: '',
	image: '',
};

const ProductForm = () => {
	const onSubmit = (values) => {
		console.log('value sumbit');
		console.log('val', values);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<form
						className='flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32'
						onSubmit={handleSubmit}
					>
						<div className='grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2'>
							<div className='flex justify-center py-4'>
								<div className='flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300'>
									<svg
										className='w-8 h-8 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
										></path>
									</svg>
								</div>
							</div>

							<div className='flex justify-center'>
								<div className='flex'>
									<h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
										Ajouter un produit
									</h1>
								</div>
							</div>
							{/* row */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
								<div className='grid grid-cols-1'>
									<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
										name
									</label>
									<input
										className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='text'
										placeholder='name'
										name='name'
										value={values.name}
										onChange={handleChange}
									/>
								</div>
								<div className='grid grid-cols-1'>
									<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
										Marque
									</label>
									<input
										className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='text'
										placeholder='Marque du produit'
										name='brand'
										value={values.brand}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* row */}
							<div className='grid grid-cols-1 mt-5 mx-7'>
								<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
									Description
								</label>
								<textarea
									className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									rows='3'
									placeholder='Enter some long form content.'
									name='description'
									value={values.description}
									onChange={handleChange}
								></textarea>
							</div>
							{/* row */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
								<div className='grid grid-cols-1'>
									<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
										Prix
									</label>
									<input
										className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='number'
										placeholder='prix'
										name='price'
										value={values.price}
										onChange={handleChange}
									/>
								</div>
								<div className='grid grid-cols-1'>
									<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
										Nombre en Stock
									</label>
									<input
										className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
										type='number'
										placeholder='Nombre de produit en Stock'
										name='count_in_stock'
										value={values.count_in_stock}
										onChange={handleChange}
									/>
								</div>
							</div>
							{/* row */}
							<div className='grid grid-cols-1 mt-5 mx-7'>
								<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
									Categorie
								</label>
								<select
									className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									name='category_id'
									value={values.category_id}
									onChange={handleChange}
								>
									<option>Categorie 1</option>
									<option>Categorie 2</option>
									<option>Categorie 3</option>
								</select>
							</div>

							<div className='grid grid-cols-1 mt-5 mx-7'>
								<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1'>
									Upload Photo
								</label>
								<div className='flex items-center justify-center w-full'>
									<label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
										<div className='flex flex-col items-center justify-center pt-7'>
											<svg
												className='w-10 h-10 text-purple-400 group-hover:text-purple-600'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
												></path>
											</svg>
											<p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>
												Selectionne une photo
											</p>
										</div>
										<input
											type='file'
											className='hidden'
											name='image'
											value={values.image}
											onChange={handleChange}
										/>
									</label>
								</div>
							</div>

							<div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
								<button
									type='submit'
									onClick={() => alert('clic')}
									className='w-1/2 bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'
								>
									ajouter
								</button>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</>
	);
};

export default ProductForm;
