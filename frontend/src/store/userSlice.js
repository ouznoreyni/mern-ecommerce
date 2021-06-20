import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { users: [], loading: false },
	reducers: {},
	extraReducers: {},
});

export default userSlice;
