import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import userSlice from './userSlice';

export default combineReducers({
	auth: authSlice.reducer,
	product: productSlice.reducer,
	user: userSlice.reducer,
	cart: cartSlice.reducer,
});
