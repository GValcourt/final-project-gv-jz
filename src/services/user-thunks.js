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

export const getAllUsersThunk = createAsyncThunk(
    'profile/getAll',
    async () => {
        const allUsers = await service.getAllUsers();
        //console.log(allUsers)
        return allUsers;
    }
)

export const getUsersByPredThunk = createAsyncThunk(
    'profile/get',
    async ([pred, givenValue]) => {
        //console.log(pred, givenValue)
        const users = await service.getUsersByPred(pred, givenValue);
        return users;
    }
)





