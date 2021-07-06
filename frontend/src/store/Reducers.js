import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import cartSlice from './CartSlice';
import categoriesSlice from './CategorySlice';
import productSlice from './ProductSlice';
import userSlice from './UserSlice';

export default combineReducers({
	auth: authSlice.reducer,
	product: productSlice.reducer,
	category: categoriesSlice.reducer,
	user: userSlice.reducer,
	cart: cartSlice.reducer,
});
