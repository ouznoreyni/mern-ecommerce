import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './Api';

const url = '/products';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		list: {
			cartItems: [],
			shippingAddress: {},
		},
		loading: false,
		message: '',
		lastFetch: null,
	},
	reducers: {
		addItemCartRequested: (state, action) => {
			state.loading = true;
		},
		addItemCartRequestFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
		},
		addItemCartReceived: (state, action) => {
			const item = action.payload;
			const existItem = state.list.cartItems.find(
				(i) => i.product._id === item.product._id
			);
			if (existItem)
				state.list.cartItems = state.list.cartItems.map((i) =>
					i.product._id === existItem.product._id ? item : i
				);
			else state.list.cartItems.push(item);
			state.loading = false;
			state.lastFetch = Date.now();
		},

		removeItemCart: (state, action) => {
			const { cartItems } = state.list;
			state.list.cartItems = cartItems.filter(
				(i) => i.product._id !== action.payload._id
			);
		},
		clear_item_cart: (state, action) => {},
	},
	extraReducers: {},
});

const { addItemCartReceived, addItemCartRequested, addItemCartRequestFailed } =
	cartSlice.actions;

export const addToCart =
	(id, quantity = 1) =>
	async (dispatch, getState) => {
		await dispatch(
			apiCallBegan({
				url: `${url}/${id}`,
				onStart: addItemCartRequested.type,
				onSucces: addItemCartReceived.type,
				onError: addItemCartRequestFailed.type,
				extraPayload: { quantity },
			})
		);

		localStorage.setItem(
			'cartItems',
			JSON.stringify(getState().entities.cart.list.cartItems)
		);
	};

export default cartSlice;
