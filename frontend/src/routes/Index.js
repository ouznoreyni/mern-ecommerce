import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../screens/About';
import CategoryListAdmin from '../screens/admin/categories/CategoryListAdmin';
import Dashboard from '../screens/admin/Dashboard';
import ErrorAdminPages from '../screens/admin/ErrorAdminPages';
import OrderListAdmin from '../screens/admin/orders/OrderListAdmin';
import ProductCreation from '../screens/admin/products/ProductCreation';
import ProductListAdmin from '../screens/admin/products/ProductListAdmin';
import UsersListAdmin from '../screens/admin/users/UsersListAdmin';
import Cart from '../screens/Cart';
import Contact from '../screens/Contact';
import DashboardCustomer from '../screens/customer/DashboardCustomer';
import Order from '../screens/customer/Order';
import ErrorPage from '../screens/ErrorPage';
import Home from '../screens/Home';
import Login from '../screens/Login';
import ProductDetails from '../screens/ProductDetails';
import Products from '../screens/Products';
import Register from '../screens/Register';
import ShippingOrderScreen from '../screens/ShippingOrderScreen';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

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
			<Route exact path='/cart'>
				<Cart />
			</Route>
			<Route exact path='/'>
				<Home />
			</Route>
			<PrivateRoute exact path='/customer/orders' component={Order} />
			<PrivateRoute exact path='/customer' component={DashboardCustomer} />
			<PrivateRoute exact path='/checkout' component={ShippingOrderScreen} />

			<AdminRoute path='/admin/dashboard' component={Dashboard}></AdminRoute>
			<AdminRoute
				path='/admin/products/add'
				component={ProductCreation}
			></AdminRoute>
			<AdminRoute
				path='/admin/products'
				component={ProductListAdmin}
			></AdminRoute>
			<AdminRoute
				path='/admin/categories'
				component={CategoryListAdmin}
			></AdminRoute>
			<AdminRoute path='/admin/users' component={UsersListAdmin}></AdminRoute>
			<AdminRoute path='/admin/orders' component={OrderListAdmin}></AdminRoute>

			<AdminRoute path='/admin/*' component={ErrorAdminPages}></AdminRoute>

			<Route path='*'>
				<ErrorPage />
			</Route>
		</Switch>
	);
};

export default index;
