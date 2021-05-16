import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { default as auth } from '../services/authService';
import notify from '../services/logService';

export const loginUser = createAsyncThunk(
	'auth/login',
	async (credential, thunkAPI) => {
		try {
			const response = await auth.login(credential);
			console.log('response ', response);
			// if (response.data) {
			// 	authService.saveToken(response.data.token);
			// 	return jwtDecode(response.data.token);
			// }
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
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
	},
	reducers: {
		setUser: (user, { payload }) => ({
			currentUser: payload,
			isFetching: false,
			isSuccess: true,
			isError: false,
			errorMessage: '',
		}),
		logout: (state) => {
			return state;
		},
	},
	extraReducers: {
		[loginUser.fulfilled]: (state, { payload }) => ({
			...state,
			isFetching: false,
			isSuccess: true,
			isError: false,
			errorMessage: '',
			currentUser: payload,
		}),
		[loginUser.rejected]: (state, { payload }) => ({
			...state,
			isFetching: false,
			isSuccess: false,
			isError: true,
			errorMessage: payload,
		}),
	},
});

export const { loadAuthenticatedUser, currentUser, setUser } =
	authSlice.actions;

export default authSlice;
