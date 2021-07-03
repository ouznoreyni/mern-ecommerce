import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import authService, { default as auth } from '../services/AuthService';
import notify from '../services/LogService';

export const loginUser = createAsyncThunk(
	'auth/login',
	async (credential, thunkAPI) => {
		try {
			const response = await auth.login(credential);
			if (response.data) {
				auth.saveToken(response.data.token);
				return jwtDecode(response.data.token);
			}
		} catch (error) {
			notify.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const registerUser = createAsyncThunk(
	'auth/register',
	async (credential, thunkAPI) => {
		try {
			const response = await auth.register(credential);
			console.log('response ==>', response);
			if (response.data) {
				auth.saveToken(response.data.token);
				return response.data.user;
			}
		} catch (error) {
			notify.error(error.message);
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		currentUser: {},
		loading: false,
		message: '',
	},
	reducers: {
		setUser: (user, { payload }) => ({
			currentUser: payload,
			loading: false,
			message: '',
		}),
		logout: (state, action) => {
			authService.removeToken();
			return {
				currentUser: {},
				loading: false,
				message: '',
			};
		},
	},
	extraReducers: {
		[loginUser.pending]: (state, { payload }) => ({
			...state,
			loading: true,
		}),
		[loginUser.fulfilled]: (state, { payload }) => ({
			loading: false,
			message: '',
			currentUser: payload,
		}),
		[loginUser.rejected]: (state, { payload }) => {
			console.log('reject', payload);
			return {
				...state,
				isFetching: false,
				isSuccess: false,
				isError: true,
				errorMessage: payload,
			};
		},

		[registerUser.pending]: (state, { payload }) => ({
			...state,
			loading: true,
		}),
		[registerUser.fulfilled]: (state, { payload }) => ({
			loading: false,
			message: '',
			currentUser: payload,
		}),
		[registerUser.rejected]: (state, { payload }) => {
			console.log('reject', payload);
			return {
				...state,
				isFetching: false,
				isSuccess: false,
				isError: true,
				errorMessage: payload,
			};
		},
	},
});

export const { loadAuthenticatedUser, currentUser, setUser, logout } =
	authSlice.actions;

export default authSlice;
