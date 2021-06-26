import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './AuthSlice';
import cartSlice from './CartSlice';
import productSlice from './ProductSlice';
import userSlice from './UserSlice';

export default combineReducers({
	auth: authSlice.reducer,
	product: productSlice.reducer,
	user: userSlice.reducer,
	cart: cartSlice.reducer,
});
