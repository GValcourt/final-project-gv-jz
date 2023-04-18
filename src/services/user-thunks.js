import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./user-service"

export const createUserThunk = createAsyncThunk(
    'profile/register',
    async (profile) => {
        const newUser = await service.createProfile(profile)
        return newUser;
    })

export const updateUserThunk =
    createAsyncThunk('profile/editProfile',async (profile) => await service.updateProfile(profile))
    // Should this return profile?


