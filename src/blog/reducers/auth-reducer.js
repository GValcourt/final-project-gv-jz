import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, registerThunk,
    profileThunk, updateUserThunk, checkUsernameThunk
} from "../../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null },
    reducers: {},
    extraReducers: {
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [checkUsernameThunk.fulfilled]: (state, { payload }) => {}
    },
});

export default authSlice.reducer;