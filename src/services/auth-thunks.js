import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service.js";


export const loginThunk = createAsyncThunk(
    "user/login", async ({username, password}) => {
        const result = await authService.login({username, password});
        return result;
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await authService.profile();
    });


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });


export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
    }
);

export const registerThunk = createAsyncThunk(
    "user/register", async ({first, last, email, type, username, password}) => {
        return await authService.register({first, last, email, type, username, password});
    }
);