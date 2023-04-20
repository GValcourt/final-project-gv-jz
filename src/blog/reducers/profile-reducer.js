import {createSlice} from "@reduxjs/toolkit";
import {createUserThunk, updateUserThunk} from "../../services/user-thunks";

const currentUser = {
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223
}


const initialState = {
    profile: {
        firstName: 'Jose',
        lastName: 'Annunziato',
        handle: '@jannunzi',
        profilePicture: 'jose.png',
        bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '7/7/1968',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 223,
    },
    loading: false
}

const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    extraReducers: {
        [createUserThunk.pending]:
            (state) => {
                state.loading = true
                state.profile = null
            },
        [createUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.profile = payload
                state.users.push(payload)
            },
        [createUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateUserThunk.pending]:
            (state) => {
                state.loading = true
                state.profile = null
            },
        [updateUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const userNdx = state.users
                    .findIndex((u) => u._id === payload._id)
                state.users[userNdx] = {
                    ...state.users[userNdx],
                    ...payload
                }
            },
        [updateUserThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }

}});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;