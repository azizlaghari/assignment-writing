import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        name: '',
        email: '',
        password: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const { setName, setEmail, setPassword } = registrationSlice.actions;
export default registrationSlice.reducer;
