import {configureStore} from '@reduxjs/toolkit'
import themeReducer from '../store/features/theme/themeSlice'
import userReducer from '../store/features/user/userSlice'

export const store = configureStore({
  reducer: { 
    theme: themeReducer,
    user: userReducer
    
  },
});