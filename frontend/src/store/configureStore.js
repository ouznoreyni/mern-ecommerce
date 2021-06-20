import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/api';
import { loadProducts } from './productSlice';
import reducers from './reducers';

const store = configureStore({
	reducer: reducers,
	middleware: [...getDefaultMiddleware(), api],
});

store.dispatch(loadProducts());
export default store;
