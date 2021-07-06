import { configureStore } from '@reduxjs/toolkit';
import api from './middleware/Api';
import reducers from './Reducers';

const store = configureStore({
	reducer: { entities: reducers },
	middleware: [api],
});

export default store;
