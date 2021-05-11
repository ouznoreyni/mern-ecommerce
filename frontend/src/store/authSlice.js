import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { default as auth, default as authService } from '../services/authService';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const { data } = await auth.login(credential);
      if (data) {
        authService.saveToken(data.token);
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

export const {
  loadAuthenticatedUser,
  currentUser,
  setUser,
} = authSlice.actions;

export default authSlice;
