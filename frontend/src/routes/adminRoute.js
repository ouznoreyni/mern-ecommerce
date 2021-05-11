import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AdminRoute = ({ component: Component, render, ...rest }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    try {
      if (currentUser && currentUser.role.authority == 'ROLE_ADMIN') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.log(error);
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
