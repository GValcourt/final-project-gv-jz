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
       const result = await authService.profile();
       console.log("Profile thunk result: ", result);
       return result;
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
        const response = await authService.register({first_name: first,
            last_name:last, email: email, user_type:type, username:username, password:password});
        return response;
    }
);

export const checkUsernameThunk = createAsyncThunk(
    'user/findUsername', async (username) => {
        const response = await authService.checkUsername();
        return response.data;
    }
);
