import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		list: {
			products: [],
		},
		loading: false,
		lastFetch: null,
	},
	reducers: {
		productsRequested: (products, action) => {
			products.loading = true;
		},
		productsRequestFailed: (products, action) => {
			products.loading = false;
		},
		productsReceived: (products, action) => {
			products.list = action.payload;
			products.loading = false;
		},
	},
});

const { productsReceived, productsRequested, productsRequestFailed } =
	productSlice.actions;

const url = '/products';
//Action Creators
export const loadProducts = () =>
	apiCallBegan({
		url,
		onStart: productsRequested.type,
		onSucces: productsReceived.type,
		onError: productsRequestFailed.type,
	});

export default productSlice;
