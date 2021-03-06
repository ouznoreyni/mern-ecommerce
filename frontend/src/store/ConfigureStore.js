import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from './middleware/Api';
import reducers from './Reducers';

const store = configureStore({
	reducer: { entities: reducers },
	middleware: [...getDefaultMiddleware({ serializableCheck: false }), api],
});

export default store;
