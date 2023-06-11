import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state, action) { },
        deleteUsers(state, action) { },
    },
});
// console.log(usersSlice.actions);
export default usersSlice.reducer;
export const { addUser } = usersSlice.actions;