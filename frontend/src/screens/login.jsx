import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authSlice';
import authService from '../services/authService';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required').min(5).max(50),
  password: Yup.string().required('Required').min(5).max(50),
});

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('fetch');
    if (authService.getToken()) {
      try {
        const { role } = authService.decodedToken();
        if (role.authority == 'ROLE_ADMIN') {
          history.push('/admin/dashboard');
        }
        if (role.authority == 'ROLE_USER') {
          history.push('/customer/dashboard');
        }
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  }, []);

  const onSubmit = async (credentials) => {
    console.log('====================================');
    console.log(credentials);
    console.log('====================================');
    dispatch(loginUser(credentials));
  };

  return (
    <>
      <div className='flex items-center min-h-screen bg-white dark:bg-gray-900'>
        <div className='container mx-auto shadow-2xl'>
          <div className='max-w-md mx-auto my-10'>
            <div className='text-center'>
              <h1 className='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
                Se connecter
              </h1>
              <p className='text-gray-500 dark:text-gray-400'>
                Connecter-vous pour accéder à votre compte
              </p>
            </div>
            <div className='m-7'>
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
                  <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                      <label
                        htmlFor='username'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
                      >
                        Nom d'utilisateur
                      </label>
                      <input
                        value={values.username}
                        type='text'
                        name='username'
                        id='username'
                        onChange={handleChange}
                        placeholder='ouznoreyni221'
                        className={`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ${
                          errors.username &&
                          touched.username &&
                          'border-red-500'
                        }`}
                      />
                      {errors.username && touched.username && (
                        <div className='text-red-500'>{errors.username}</div>
                      )}
                    </div>
                    <div className='mb-6'>
                      <div className='flex justify-between mb-2'>
                        <label
                          htmlFor='password'
                          className='text-sm text-gray-600 dark:text-gray-400'
                        >
                          Password
                        </label>
                      </div>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='votre Password'
                        className={`w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500 ${
                          errors.password &&
                          touched.password &&
                          'border-red-500'
                        }`}
                      />
                      {errors.password && touched.password && (
                        <div className='text-red-600'>{errors.password}</div>
                      )}
                    </div>
                    <div className='mb-6'>
                      <button
                        type='submit'
                        className='w-full px-3 py-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none'
                      >
                        Connexion
                      </button>
                    </div>
                    <p className='text-sm text-center text-gray-400'>
                      Vous n&#x27;avez pas encore un compte?{' '}
                      <Link
                        to='/register'
                        className='text-blue-400 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800'
                      >
                        Inscrivez vous!
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
