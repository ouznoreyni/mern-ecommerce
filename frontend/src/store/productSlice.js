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
	},
});

const {
	productsReceived,
	productsRequested,
	productsRequestFailed,
	productAdded,
	productDeleted,
} = productSlice.actions;

//Action Creators
export const loadProducts = (page = 1) =>
	apiCallBegan({
		url: `${url}?_page${page}&_limit=10`,
		onStart: productsRequested.type,
		onSucces: productsReceived.type,
		onError: productsRequestFailed.type,
	});

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

export default productSlice;
