import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import useCategories from '../hooks/useCategories';
import { addProduct } from '../store/ProductSlice';
const validationSchema = Yup.object().shape({
	title: Yup.string().required('Required').min(5).max(150),
	brand: Yup.string().required('Required').min(5).max(50),
	description: Yup.string().required('Required'),
	price: Yup.number().required('Required').min(500),
	countInStock: Yup.number().required('Required').min(0),
	category: Yup.string().required('Required'),
	image: Yup.mixed(),
});

const initialValues = {
	title: '',
	brand: '',
	description: '',
	price: '',
	countInStock: '',
	category: '',
};

const ProductForm = ({ product = {} }) => {
	const dispatch = useDispatch();
	const categories = useCategories();
	const [file, setfile] = useState();

	const onSubmit = async (product) => {
		if (!file) {
			console.log('ajouter un fichier');
			return;
		}
		const data = new FormData();
		for (const [key, value] of Object.entries(product)) {
			data.append(key, value);
		}
		data.append('image', file);
		dispatch(addProduct(data));
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
						className='flex h-screen items-center justify-center'
						onSubmit={handleSubmit}
					>
						<h1 className='bg-red-700'> </h1>
						<div className='grid  rounded-lg  w-full'>
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
										className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${
											errors.title && touched.title && 'border-red-500'
										}`}
										type='text'
										placeholder='name'
										name='title'
										value={values.title}
										onChange={handleChange}
									/>
								</div>
								<div className='grid grid-cols-1'>
									<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
										Marque
									</label>
									<input
										className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${
											errors.brand && touched.brand && 'border-red-500'
										}`}
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
									description
								</label>
								<textarea
									className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${
										errors.description &&
										touched.description &&
										'border-red-500'
									}`}
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
										className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${
											errors.price && touched.price && 'border-red-500'
										}`}
										type='number'
										min='500'
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
										className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent'
										type='number ${
											errors.countInStock &&
											touched.countInStock &&
											'border-red-500'
										}`}
										placeholder='Nombre de produit en Stock'
										name='countInStock'
										type='number'
										min='0'
										value={values.countInStock}
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
									className={`py-2 px-3 rounded-lg border-2 border-gray-400 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent ${
										errors.category && touched.category && 'border-red-500'
									}`}
									name='category'
									value={values.category}
									onChange={handleChange}
								>
									{categories.list.categories.map((c) => (
										<option value={c._id}>{c.name}</option>
									))}
								</select>
							</div>

							<div className='grid grid-cols-1 mt-5 mx-7'>
								<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1'>
									Upload Photo
								</label>
								<div className='flex items-center justify-center w-full'>
									<label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-400 group'>
										<div className='flex flex-col items-center justify-center pt-7'>
											<svg
												className='w-10 h-10 text-green-600-400 group-hover:text-green-600'
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
											<p className='lowercase text-sm text-gray-400 group-hover:text-gray-900 pt-1 tracking-wider'>
												Selectionne une photo
											</p>
										</div>
										<input
											type='file'
											className='hidden'
											name='image'
											onChange={(e) => setfile(e.target.files[0])}
										/>
									</label>
								</div>
							</div>

							<div className='flex items-center justify-center mx-7 md:gap-8 gap-4 pt-5 pb-5'>
								<button
									type='submit'
									className='w-full h-20 bg-green-500 rounded-full hover:bg-green-700 focus:outline-none  shadow-xl font-medium text-white px-4 text-3xl'
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
