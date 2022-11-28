import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import followReducer from './slices/followSlice'
import PopUpReducer from './slices/popUpSlice'
import NotificationReducer from './slices/notificationSlice'


export const store = configureStore({
  reducer: {
    Authentication: authReducer,
    PopUp: PopUpReducer,
    Network: followReducer,
    Notifications: NotificationReducer
  },
  // devTools: process.env.NODE_ENV !== 'production'
})