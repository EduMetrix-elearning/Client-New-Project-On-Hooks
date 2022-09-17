import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

export const store = configureStore({
  reducer: {
    Authentication: authReducer
  },
  // devTools: process.env.NODE_ENV !== 'production'
})