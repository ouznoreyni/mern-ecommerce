import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';


const privateRoute = () => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
 try {
  const decodedToken = jwtDecode(localStorage.getItem('token'));
  if (decodedToken._id) {
    setAuth(true);
  }
 } catch (error) {
   console.log(error);
 }
  });
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default privateRoute;
