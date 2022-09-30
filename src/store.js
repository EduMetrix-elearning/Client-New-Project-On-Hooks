import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import PopUpReducer from './slices/popUpSlice'


export const store = configureStore({
  reducer: {
    Authentication: authReducer,
    PopUp: PopUpReducer
  },
  // devTools: process.env.NODE_ENV !== 'production'
})