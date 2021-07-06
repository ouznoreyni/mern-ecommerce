import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './Api';

const url = '/categories';

const categoriesSlice = createSlice({
	name: 'category',
	initialState: {
		list: {
			categories: [],
		},
		loading: false,
		message: '',
		lastFetch: null,
	},
	reducers: {
		categoriesRequested: (state, action) => {
			state.loading = true;
		},
		categoriesRequestFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
		},
		categoriesReceived: (state, action) => {
			state.list = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
		},
		categoryAdded: (state, action) => {
			console.log('action', action.payload);
			state.list.categories.push(action.payload.category);
		},
		categoryDeleted: (state, action) => {
			const categories = state.list.categories;
			const { _id } = action.payload;
			const existingcategory = categories.find((p) => p._id === _id);
			if (existingcategory) {
				return categories.filter((p) => p._id !== _id);
			}
		},
		categorieSearch: (state, action) => {
			state.list.categories = action.payload;
		},
	},
});

const {
	categoriesReceived,
	categoriesRequested,
	categoriesRequestFailed,
	categoryAdded,
	categoryDeleted,
	categoriesearch,
} = categoriesSlice.actions;

/*Action Creators*/

export const loadcategories = (page = 1) =>
	apiCallBegan({
		url: `${url}?page=${page}&_limit=10`,
		onStart: categoriesRequested.type,
		onSucces: categoriesReceived.type,
		onError: categoriesRequestFailed.type,
	});

export const addcategory = (category) =>
	apiCallBegan({
		url,
		method: 'post',
		data: category,
		onSucces: categoryAdded.type,
	});

export const updatecategory = (category) =>
	apiCallBegan({
		url: `${url}/${category._id}`,
		method: 'put',
		data: category,
		onSucces: categoryDeleted.type,
	});

export const deletecategory = (category) =>
	apiCallBegan({
		url: `${url}/${category._id}`,
		method: 'delete',
		onSucces: categoryDeleted.type,
	});

export const searchcategory = (title) =>
	apiCallBegan({
		url: `${url}?title=${title}`,
		method: 'get',
		onSucces: categoriesearch.type,
	});

export default categoriesSlice;
