import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { default as auth } from '../services/authService';
import notify from '../services/logService';

export const loginUser = createAsyncThunk(
	'auth/login',
	async (credential, thunkAPI) => {
		try {
			const response = await auth.login(credential);
			if (response.data) {
				auth.saveToken(response.data.token)
				return jwtDecode(response.data.token);
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
			loading:false,
			message:''
		}),
		logout: (state) => {
			return state;
		},
	},
	extraReducers: {
		[loginUser.pending]:(state, {payload})=>({
			...state,
			loading:true
		}),
		[loginUser.fulfilled]: (state, { payload }) =>(
			{
				loading:false,
				message: '',
				currentUser: payload,
			}
		),
		[loginUser.rejected]: (state, { payload }) => {console.log("reject", payload); return{
			...state,
			isFetching: false,
			isSuccess: false,
			isError: true,
			errorMessage: payload,
		}},
	},
});

export const { loadAuthenticatedUser, currentUser, setUser } =
	authSlice.actions;

export default authSlice;
