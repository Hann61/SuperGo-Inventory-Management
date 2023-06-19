import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addUserAsync, getUsersAsync,deleteUserAsync } from './thunks';

const INITIAL_STATE = {
    list: [],
    getUsers: REQUEST_STATE.IDLE,
    addUser: REQUEST_STATE.IDLE,
    deleteUserAsync: REQUEST_STATE.IDLE,
    error: null
};

const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAsync.pending, (state) => {
                state.getUsers = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                state.getUsers = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getUsersAsync.rejected, (state, action) => {
                state.getUsers = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addUserAsync.pending, (state) => {
                state.addUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addUserAsync.fulfilled, (state, action) => {
                state.addUser = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                state.addUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteUserAsync.pending, (state) => {
                state.deleteUser = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteUserAsync.fulfilled, (state, action) => {
                state.deleteUser = REQUEST_STATE.FULFILLED;
                state.list.remove(action.payload);
            })
            .addCase(deleteUserAsync.rejected, (state, action) => {
                state.deleteUser = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });

    }
});

export default usersSlice.reducer;
