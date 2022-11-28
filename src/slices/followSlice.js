import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    followers: null,
    followings: null
}

export const followSlice = createSlice({
    name: 'follow',
    initialState,
    reducers: {
        followings(state, action) {
            state.followings = action.payload
        },
        followers(state, action) {
            state.followers = action.payload
        }
    }
})

export const { followings, followers } = followSlice.actions
export default followSlice.reducer
