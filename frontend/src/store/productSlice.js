import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const url = '/products';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		list: {
			products: [],
		},
		loading: false,
		message: '',
		lastFetch: null,
	},
	reducers: {
		productsRequested: (state, action) => {
			state.loading = true;
		},
		productsRequestFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
		},
		productsReceived: (state, action) => {
			state.list = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
		},
		productAdded: (state, action) => {
			state.list.products.push(action.payload);
		},
		productDeleted: (state, action) => {
			const products = state.list.products;
			const { _id } = action.payload;
			console.log('pr ', products);
			const existingProduct = products.find((p) => p._id === _id);
			if (existingProduct) {
				return products.filter((p) => p._id !== _id);
			}
		},
		productSearch: (state, action) => {
			state.list.products = action.payload;
		},
	},
});

const {
	productsReceived,
	productsRequested,
	productsRequestFailed,
	productAdded,
	productDeleted,
	productSearch,
} = productSlice.actions;

/*Action Creators*/

export const loadProducts = (page = 1) =>
	apiCallBegan({
		url: `${url}?_page${page}&_limit=10`,
		onStart: productsRequested.type,
		onSucces: productsReceived.type,
		onError: productsRequestFailed.type,
	});

//caching
// export const loadProducts =
// 	(page = 1) =>
// 	(dispatch, getState) => {
// 		const { lastFetch } = getState.entities.products;
// 		const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
// 		if (diffInMinutes < 10) return;
// 		dispatch(
// 			apiCallBegan({
// 				url: `${url}?_page${page}&_limit=10`,
// 				onStart: productsRequested.type,
// 				onSucces: productsReceived.type,
// 				onError: productsRequestFailed.type,
// 			})
// 		);
// 	};

export const addProduct = (product) =>
	apiCallBegan({
		url,
		method: 'post',
		data: product,
		onSucces: productAdded.type,
	});

export const updateProduct = (product) =>
	apiCallBegan({
		url: `${url}/${product._id}`,
		method: 'put',
		data: product,
		onSucces: productDeleted.type,
	});

export const deleteProduct = (product) =>
	apiCallBegan({
		url: `${url}/${product._id}`,
		method: 'delete',
		onSucces: productDeleted.type,
	});

export const searchProduct = (title) =>
	apiCallBegan({
		url: `${url}?title=${title}`,
		method: 'get',
		onSucces: productSearch.type,
	});

export default productSlice;
