// store.js
import { configureStore } from '@reduxjs/toolkit';
import signupReducer from './path/to/signupReducer';

const store = configureStore({
    reducer: {
        signup: signupReducer,
        // Add other reducers here if needed
    },
});

export default store;
