import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/AuthSlice';

const Brand = () => {
	const currentUser = useSelector((state) => state.entities.auth.currentUser);

	const dispatch = useDispatch();

	const handleLogout = () => dispatch(logout());

	return (
		<nav className='flex justify-between w-full topHeader text-white p-4'>
			<a href='/'>
				<span className='font-semibold text-xl tracking-tight'>Sen-Store</span>
			</a>
			<div>
				<h4 className='text-red-500'>
					Appelez au
					<span className='text-yellow-200 bold text-sm ml-3'>
						<i className='fas fa-phone-alt bold text-yellow-200'></i> 77 630 30
						30
					</span>
				</h4>
			</div>
			<div className='items-center w-auto flex'>
				{/* <div class='flex '>
          <a class='block text-white mr-4' href='/link'>
            Link 1
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 2
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 3
          </a>
          <a class='block text-white mr-4' href='/link'>
            Link 4
          </a>
        </div> */}

				<div className='flex text-sm'>
					{currentUser && currentUser._id ? (
						<>
							<div className='dropdown inline-block relative'>
								<button className='bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center'>
									<span className='mr-1'>{currentUser.firstName}</span>
								</button>
								<ul className='dropdown-menu hidden absolute w-full topHeader  text-gray-700 pt-2 '>
									<li className='topHeader'>
										<Link
											to={currentUser.isAdmin ? 'admin/dashboard' : 'customer'}
											className='text-white font-semibold  py-2 px-1 rounded'
										>
											Dashboard
										</Link>
									</li>
									<li className='topHeader'>
										<Link
											className='text-white font-semibold  py-2 mt-4 px-1 rounded'
											to='/profil'
										>
											Profil
										</Link>
									</li>
									<li className='topHeader'>
										<button
											onClick={handleLogout}
											className='text-white font-semibold py-2 px-1 rounded'
										>
											deconnexion
										</button>
									</li>
								</ul>
							</div>
						</>
					) : (
						<>
							<Link
								className='p-2 ml-2 text-black bg-white font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-700 hover:text-white hover:border-white'
								to='/login'
							>
								connexion
							</Link>
							<Link
								className='p-2 ml-2 bg-teal-500 text-black bg-white font-semibold leading-none border border-gray-700 rounded hover:border-transparent hover:bg-gray-700 hover:text-white hover:border-white'
								to='/register'
							>
								creer compte
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Brand;
