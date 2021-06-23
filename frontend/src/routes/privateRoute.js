import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
	const { component: Component, render, ...rest } = props;
	const [auth, setAuth] = useState(true);
	useEffect(() => {
		try {
			const decodedToken = jwtDecode(localStorage.getItem('token'));
			if (decodedToken._id) {
				setAuth(true);
			}
		} catch (error) {
			console.log(error);
		}
	}, []);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!auth)
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: this.props.location,
								},
							}}
						/>
					);
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

export default PrivateRoute;
