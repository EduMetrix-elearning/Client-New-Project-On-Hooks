import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: null
}

export const NotificationSlice = createSlice({
    name: 'Notification',
    initialState,
    reducers: {
        count(state, action) {
            state.count = action.payload
        }
    }
})

export const { count } = NotificationSlice.actions
export default NotificationSlice.reducer