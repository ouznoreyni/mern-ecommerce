import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import MainLayout from '../components/layout/MainLayout';
import { registerUser } from '../store/AuthSlice';

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required('Required').min(5).max(50),
	lastName: Yup.string().required('Required').min(5).max(50),
	email: Yup.string().email().required('Required').min(5).max(50),
	password: Yup.string().required('Required').min(5).max(50),
	repeat_password: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Passwords must match'
	),
});

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	repeat_password: '',
};

const Register = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentUser = useSelector((state) => state.entities.auth.currentUser);

	useEffect(() => {
		if (currentUser && currentUser._id) {
			try {
				if (currentUser.isAdmin) {
					history.push('/admin/dashboard');
				} else {
					history.push('/customer');
				}
			} catch (error) {
				console.log(error);
			}
		}
	}, [currentUser, history]);
	const onSubmit = (values) => {
		dispatch(registerUser(values));
		console.log('value sumbit');
		console.log('val', values);
	};

	return (
		<MainLayout>
			<div className='flex justify-center my-12 pt-10'>
				{/* <!-- Row --> */}
				<div className='w-full px-20 flex mt-20'>
					{/* <!-- Col --> */}
					<div className='h-auto hidden lg:block lg:w-1/3 bg-cover rounded-l-lg'>
						<img src='../../assets/img/secue_login.svg' alt='secure_login' />
					</div>
					{/* <!-- Col --> */}
					<div className='w-full lg:w-2/3 bg-white p-5 rounded-lg lg:rounded-l-none'>
						<ToastContainer />
						<h3 className='pt-4 text-2xl text-center'>Se connecter!</h3>
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
									onSubmit={handleSubmit}
									className='px-8 pt-6 pb-8 mb-4 shadow-2xl rounded'
								>
									<div className='mb-4 md:flex md:justify-between bg'>
										<div className='mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:mr-2 md:mb-0'>
											<label
												className='block mb-2 text-sm font-bold text-gray-700'
												htmlFor='firstName'
											>
												Prenom
											</label>
											<input
												className={`w-full px- py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
													errors.firstName &&
													touched.firstName &&
													'border-red-500'
												}`}
												id='firstName'
												name='firstName'
												type='text'
												placeholder='Prenom'
												value={values.firstName}
												onChange={handleChange}
											/>
											{errors.firstName && touched.firstName && (
												<p className='text-xs italic text-red-500 mt-2'>
													{errors.firstName}
												</p>
											)}
										</div>
										<div className='md:ml-2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
											<label
												className='block mb-2 text-sm font-bold text-gray-700'
												htmlFor='lastName'
											>
												Nom
											</label>
											<input
												className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
													errors.lastName &&
													touched.lastName &&
													'border-red-500'
												}`}
												id='lastName'
												type='text'
												name='lastName'
												placeholder='Nom'
												value={values.lastName}
												onChange={handleChange}
											/>
											{errors.lastName && touched.lastName && (
												<p className='text-xs italic text-red-500 mt-2'>
													{errors.lastName}
												</p>
											)}
										</div>
									</div>
									{/* username and email */}
									<div className='mb-4 md:flex md:justify-between bg'>
										<div className='md:ml-2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
											<label
												className='block mb-2 text-sm font-bold text-gray-700'
												htmlFor='lastName'
											>
												Email
											</label>
											<input
												className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline  ${
													errors.email && touched.email && 'border-red-500'
												}`}
												id='email'
												type='email'
												name='email'
												placeholder='email@email.com'
												value={values.email}
												onChange={handleChange}
											/>
											{errors.email && touched.email && (
												<p className='text-xs italic text-red-500 mt-2'>
													{errors.email}
												</p>
											)}
										</div>
									</div>
									{/* end username and email */}
									<div className='mb-4 md:flex md:justify-between'>
										<div className='mb-4 md:mr-2 md:mb-0 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
											<label
												className='block mb-2 text-sm font-bold text-gray-700'
												htmlFor='password'
											>
												Mot de passe
											</label>
											<input
												className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline  ${
													errors.password &&
													touched.password &&
													'border-red-500'
												}`}
												id='password'
												type='password'
												name='password'
												placeholder='******************'
												value={values.password}
												onChange={handleChange}
											/>
											{errors.password && touched.password && (
												<p className='text-xs italic text-red-500 mt-2'>
													{errors.password}
												</p>
											)}
										</div>
										<div className='md:ml-2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
											<label
												className='block mb-2 text-sm font-bold text-gray-700'
												htmlFor='repeat_password'
											>
												Confirmer Mot de passe
											</label>
											<input
												className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline  ${
													errors.repeat_password &&
													touched.repeat_password &&
													'border-red-500'
												}`}
												id='repeat_password'
												type='password'
												name='repeat_password'
												placeholder='******************'
												value={values.repeat_password}
												onChange={handleChange}
											/>
											{errors.repeat_password && touched.repeat_password && (
												<p className='text-xs italic text-red-500 mt-2'>
													{errors.repeat_password}
												</p>
											)}
										</div>
									</div>
									<div className='mb-6 text-center'>
										<button
											disabled={(touched && errors.password) || errors.password}
											className='w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 px-4 py-3 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline'
											type='submit'
										>
											S'inscrire
										</button>
									</div>
									<hr className='mb-6 border-t' />
									<div className='text-center'>
										Vous avez déjà un compte ?
										<Link
											to='/login'
											className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
										>
											Connexion!
										</Link>
									</div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Register;
