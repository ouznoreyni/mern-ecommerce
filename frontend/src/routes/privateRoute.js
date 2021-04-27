import React, { useState, useEffect } from 'react';

import { Route, Redirect, useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const privateRoute = () => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    if (decodedToken._id) {
      setAuth(true);
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
