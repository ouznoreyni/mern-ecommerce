import React, { useState, useEffect, Component } from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, render, ...rest }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    if (currentUser && currentUser.role.authority == 'ROLE_ADMIN') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    return () => {};
  }, []);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAdmin)
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

export default AdminRoute;
