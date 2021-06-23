import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AdminRoute = (props) => {
	const { component: Component, render, ...rest }=props
	const currentUser = useSelector((state) => state.entities.auth.currentUser);
	
	useEffect(() => {
		console.log(currentUser);
	}, [currentUser]);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!currentUser || !currentUser.isAdmin)
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

export default AdminRoute;
