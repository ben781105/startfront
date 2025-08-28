import {configureStore} from '@reduxjs/toolkit'
import themeReducer from '../store/features/theme/themeSlice'
import userReducer from '../store/features/user/userSlice'
import groupReducer from './features/group/groupSlice'
import messageReducer from '../store/features/message/messageSlice'
export const store = configureStore({
  reducer: { 
    theme: themeReducer,
    user: userReducer,
    group:groupReducer,
    message:messageReducer
  },
});