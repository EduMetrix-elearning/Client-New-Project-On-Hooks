import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authState: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setAuthState(state, action) {
            state.authState = action.payload;
        }

    },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;