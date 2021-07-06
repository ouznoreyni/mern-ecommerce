import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './Api';

const url = '/users';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		list: {
			users: [],
		},
		loading: false,
		message: '',
		lastFetch: null,
	},
	reducers: {
		usersRequested: (state, action) => {
			state.loading = true;
		},
		usersRequestFailed: (state, action) => {
			state.loading = false;
			state.message = action.payload;
		},
		usersReceived: (state, action) => {
			console.log('payload ', action);
			state.list = action.payload;
			state.loading = false;
			state.lastFetch = Date.now();
		},
	},
	extraReducers: {},
});

const { usersReceived, usersRequested, usersRequestFailed } = userSlice.actions;
/*Action Creators*/

export const loadUsers = (page = 1) =>
	apiCallBegan({
		url: `${url}?_page${page}&_limit=10`,
		onStart: usersRequested.type,
		onSucces: usersReceived.type,
		onError: usersRequestFailed.type,
	});

export default userSlice;
