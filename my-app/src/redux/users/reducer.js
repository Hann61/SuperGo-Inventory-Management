import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    list: [{ id: 1, name: 'Han'},
        { id: 2, name: 'Cathy' },
        { id: 3, name: 'Rosie' }]
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
