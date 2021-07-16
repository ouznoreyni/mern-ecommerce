import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './Api';

const url = '/products';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		list: {
			products: [],
		},
		topProducts: [],
		product: {},
		loading: false,
		message: '',
		lastFetch: null,
	},
	reducers: {
		productsRequested: (state, action) => {
			state.loading = true;
			state.product = {};
		},
		productsRequestFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
			state.product = {};
		},
		productsReceived: (state, action) => {
			state.list = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
			state.product = {};
		},
		productReceived: (state, action) => {
			state.product = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
		},
		productsAddRequested: (state, action) => {
			state.loading = true;
			state.product = {};
		},
		productAdded: (state, action) => {
			state.list.products.push(action.payload);
			state.product = {};
			state.loading = false;
		},
		productsAddFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
			state.product = {};
		},
		productDeleted: (state, action) => {
			const products = state.list.products;
			state.product = {};
			const { _id } = action.payload;
			console.log('pr ', products);
			const existingProduct = products.find((p) => p._id === _id);
			if (existingProduct) {
				return products.filter((p) => p._id !== _id);
			}
		},
		productSearch: (state, action) => {
			state.list.products = action.payload;
			state.product = {};
		},
		topProductsReceived: (state, { payload }) => {
			state.topProducts = payload.products;
			state.loading = false;
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
	productReceived,
	topProductsReceived,
	productsAddFailed,
	productsAddRequested,
} = productSlice.actions;

/*Action Creators*/

export const loadProducts = (page = 1) =>
	apiCallBegan({
		url: `${url}?page=${page}&_limit=10`,
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
		onStart: productsAddRequested.type,
		onSucces: productAdded.type,
		onError: productsAddFailed.type,
	});

export const updateProduct = (product) =>
	apiCallBegan({
		url: `${url}/${product._id}`,
		method: 'put',
		data: product,
		onSucces: productDeleted.type,
	});

export const getProduct = (id) =>
	apiCallBegan({
		url: `${url}/${id}`,
		onSucces: productReceived.type,
	});

export const getTopProduct = () =>
	apiCallBegan({
		url: `${url}/top`,
		onSucces: topProductsReceived.type,
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
