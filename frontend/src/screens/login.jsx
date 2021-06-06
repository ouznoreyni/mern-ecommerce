import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as Yup from 'yup';
import MainLayout from '../components/layout/mainLayout';
import authService from '../services/authService';
import { loginUser } from '../store/authSlice';

const validationSchema = Yup.object().shape({
	username: Yup.string().required('Required').min(5).max(50),
	password: Yup.string().required('Required').min(5).max(50),
});

const Login = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (authService.getToken()) {
			try {
				const { role } = authService.decodedToken();
				if (role.authority === 'ROLE_ADMIN') {
					history.push('/admin/dashboard');
				}
				if (role.authority === 'ROLE_USER') {
					history.push('/customer/dashboard');
				}
			} catch (error) {
				console.log(error);
			}
		}
	});

	const onSubmit = async (credentials) => {
		dispatch(loginUser(credentials));
	};

	return (
		<MainLayout>
			<div className='flex justify-center px-6 my-12 pt-10'>
				{/* <!-- Row --> */}
				<div className='w-full xl:w-3/4 lg:w-11/12 flex mt-20'>
					{/* <!-- Col --> */}
					<div className='w-full h-auto hidden lg:block lg:w-1/2 bg-cover rounded-l-lg'>
						<img src='../../assets/img/secue_login.svg' alt='' />
					</div>
					{/* <!-- Col --> */}
					<div className='w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none'>
						<ToastContainer />
						<h3 className='pt-4 text-2xl text-center'>Se connecter!</h3>
						<Formik
							initialValues={{ username: '', password: '' }}
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
									className='px-8 pt-6 pb-8 mb-4 bg-white rounded'
									onSubmit={handleSubmit}
								>
									<div className='mb-4'>
										<label
											className='block mb-2 text-sm font-bold text-gray-700'
											htmlFor='username'
										>
											Nom d'utilisateur
										</label>
										<input
											value={values.username}
											type='text'
											name='username'
											id='username'
											onChange={handleChange}
											className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
												errors.username && touched.username && 'border-red-500'
											}`}
											placeholder='ouznoreyni'
										/>
										{errors.username && touched.username && (
											<p className='text-xs italic text-red-500 mt-2'>
												{errors.username}
											</p>
										)}
									</div>
									<div className='mb-4'>
										<label
											className='block mb-2 text-sm font-bold text-gray-700'
											htmlFor='password'
										>
											Mot de passe
										</label>
										<input
											name='password'
											value={values.password}
											onChange={handleChange}
											className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
												errors.password && touched.password && 'border-red-500'
											}`}
											id='password'
											type='password'
											placeholder='******************'
										/>
										{errors.password && touched.password && (
											<p className='text-xs italic text-red-500 mt-2'>
												{errors.password}
											</p>
										)}
									</div>
									<div className='mb-4'>
										<input
											className='mr-2 leading-tight'
											type='checkbox'
											id='checkbox_id'
										/>
										<label className='text-sm' htmlFor='checkbox_id'>
											Se Souvenir
										</label>
									</div>
									<div className='mb-6 text-center'>
										<button
											disabled={(touched && errors.password) || errors.password}
											className='w-full px-4 py-3 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline'
											type='submit'
										>
											Se connecter
										</button>
									</div>
									<hr className='mb-6 border-t' />
									<div className='text-center'>
										Vous n&#x27;avez pas encore un compte?{' '}
										<Link
											to='/register'
											className='text-blue-700 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800'
										>
											Inscrivez vous!
										</Link>
										.
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

export default Login;
