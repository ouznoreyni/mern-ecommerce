import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../services/authService';
import jwtDecode from 'jwt-decode';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const { data } = await auth.login(credential);
      if (data) {
        return jwtDecode(data.token);
      }
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userLogin: {},
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    userlogin: (user, { payload }) => {
      console.log('user ', user);
      console.log('payload ', payload);
    },
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
      userLogin: payload,
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

export const { loadAuthenticatedUser } = authSlice.actions;

export default authSlice;