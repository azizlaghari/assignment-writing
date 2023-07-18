// Import the 'createSlice' function from Redux Toolkit.
import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named 'registration' with initial state containing empty 'name', 'email', and 'password' properties.
const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  // Reducer functions to handle 'setName', 'setEmail', and 'setPassword' actions.
  reducers: {
    // Reducer to set the 'name' state to the value provided in the action payload.
    setName: (state, action) => {
      state.name = action.payload;
    },
    // Reducer to set the 'email' state to the value provided in the action payload.
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    // Reducer to set the 'password' state to the value provided in the action payload.
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

// Extract the 'setName', 'setEmail', and 'setPassword' actions from the 'registrationSlice' object.
export const { setName, setEmail, setPassword } = registrationSlice.actions;

// Export the reducer function for the 'registration' slice to be used in the Redux store.
export default registrationSlice.reducer;
