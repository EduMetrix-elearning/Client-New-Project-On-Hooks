import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    show: false
}

export const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        invokePopUp(state, action) {
            state.text = action.payload
            state.show = true
        },
        hidePopUp(state, action) {
            state.text = ""
            state.show = false
        }
    }
})

export function popUp(text) {
    return async (dispatch) => {
        console.log(text)
        dispatch(invokePopUp(text))
        setTimeout(() => {
            dispatch(hidePopUp())
        }, 3000)
    }
}

export const { invokePopUp, hidePopUp } = popUpSlice.actions
export default popUpSlice.reducer