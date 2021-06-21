import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/api';
import reducers from './reducers';

const store = configureStore({
	reducer: { entities: reducers },
	middleware: [...getDefaultMiddleware(), api],
});

export default store;
