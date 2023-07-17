// features/userSlice.js
// Import the 'createSlice' function from Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the 'user' slice with a 'user' property set to null.
const initialState = {
  user: null,
};

// Create a Redux slice named 'user' with 'setUser' and 'clearUser' reducers.
const userSlice = createSlice({
  name: "user",
  initialState,
  // Reducer functions to handle 'setUser' and 'clearUser' actions.
  reducers: {
    // Reducer to set the 'user' state to the value provided in the action payload.
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Reducer to set the 'user' state to null, effectively clearing the user data.
    clearUser: (state) => {
      state.user = null;
    },
  },
});

// Extract the 'setUser' and 'clearUser' actions from the 'userSlice' object.
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer function for the 'user' slice to be used in the Redux store.
export default userSlice.reducer;
