import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUpAPI } from '../api'; // Replace this with your actual API function

const initialState = {
    loading: false,
    error: null,
};

export const signUp = createAsyncThunk('auth/signUp', async (formData, { rejectWithValue }) => {
    try {
        const response = await signUpAPI(formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state) => {
                state.loading = false;
                // You can add any additional state updates here after successful sign-up if required.
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
