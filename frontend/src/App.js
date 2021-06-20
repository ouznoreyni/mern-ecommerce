import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loading from './components/loading/loading';
import Routes from './routes/index';
import authService from './services/authService';
import { setUser } from './store/authSlice';

function App() {
	const dispatch = useDispatch();
	const [loading, upadateLoading] = useState(true);

	useEffect(() => {
		const delay = 3;
		try {
			const timer = setTimeout(() => upadateLoading(false), delay * 1000);
			const decodedToken = authService.decodedToken();
			dispatch(setUser(decodedToken));

			return () => {
				clearTimeout(timer);
			};
		} catch (error) {
			console.log(error);
		}
	}, [dispatch, loading]);

	return loading ? (
		<Loading show={loading} />
	) : (
		<div className='mx-auto'>
			<Router>
				<Routes />
			</Router>
		</div>
	);
}
export default App;
