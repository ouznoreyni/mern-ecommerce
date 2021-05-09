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
import ProductListAdmin from '../screens/admin/products/ProductListAdmin';
import CategoryListAdmin from '../screens/admin/categories/CategoryListAdmin';
import CustomersListAdmin from '../screens/admin/customers/CustomersListAdmin';
import OrderListAdmin from '../screens/admin/orders/OrderListAdmin';
import ErrorAdminPages from '../screens/admin/ErrorAdminPages';

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
      <AdminRoute path='/admin/dashboard' component={Dashboard}></AdminRoute>
      <AdminRoute
        path='/admin/products'
        component={ProductListAdmin}
      ></AdminRoute>
      <AdminRoute
        path='/admin/categories'
        component={CategoryListAdmin}
      ></AdminRoute>
      <AdminRoute
        path='/admin/customers'
        component={CustomersListAdmin}
      ></AdminRoute>
      <AdminRoute path='/admin/orders' component={OrderListAdmin}></AdminRoute>

      <AdminRoute path='/admin/*' component={ErrorAdminPages}></AdminRoute>
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default index;
