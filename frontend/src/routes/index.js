import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from '../screens/register';
import Login from '../screens/login';
import Home from '../screens/home';
import ErrorPage from '../screens/errorPage';
import About from '../screens/about';
import Contact from '../screens/contact';
import AdminRoute from './adminRoute';
import Dashboard from '../screens/admin/dashboard';
import Products from '../screens/products';
import ProductDetails from '../screens/productDetails';

const index = () => {
  return (
    <Switch>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route exact path='/products'>
        <Products />
      </Route>
      <Route exact path='/products/:id'>
        <ProductDetails />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
      <AdminRoute path='/admin/dashboard' component={Dashboard} />
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default index;
