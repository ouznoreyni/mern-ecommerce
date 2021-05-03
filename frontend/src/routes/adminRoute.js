import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ rest, children }) => {
  const [isAdmin, setIsAdmin] = useState({});
  useEffect(() => {
    const { role } = jwtDecode(localStorage.getItem('token'));
    if (role.authority == 'ROLE_ADMIN') {
      console.log('admin');
      setIsAdmin(true);
    }
  });
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
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

export default AdminRoute;
