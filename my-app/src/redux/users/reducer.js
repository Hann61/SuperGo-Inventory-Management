import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    list: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        addUser: (state, action) => {
            state.list.push(action.payload)
        }
    },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
