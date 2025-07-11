import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../../api';
import { jwtDecode } from 'jwt-decode';


const userSlice = createSlice({
    name: 'user',
    initialState:{
        user:null,
        isAuthenticated:false,
        loading:false,
        error:null
    },
    reducers:{
        logout(state){
            state.user = null;
            state.isAuthenticated = false
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
        },
        loadUser(state){
            const token = localStorage.getItem('access')
            if(token){
                const decoded = jwtDecode(token)
                state.user = decoded
                state.isAuthenticated = true
            }
        },
        
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state) =>{
            state.loading = true
            state.error = null
        })
        .addCase(loginUser.fulfilled,(state, action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.loading = false
        })
        .addCase(loginUser.rejected, (state,action) =>{
            state.error = action.payload
            state.loading = false
        })
        .addCase(refreshToken.fulfilled , (state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
        })
        .addCase(refreshToken.rejected, (state)=>{
            state.user = null
            state.isAuthenticated = false
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
        });
    }
})

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, {rejectWithValue}) =>{
        try{
            const response = await api.post('token/', credentials)
            const {access, refresh} = response.data

            localStorage.setItem('access', access)
            localStorage.setItem('refresh', refresh)

            return jwtDecode(access)
        }
        catch(error){
            return rejectWithValue(error.response.data)
        }
        }

    
)

export const refreshToken = createAsyncThunk(
    'user/refreshToken',
    async (_, {rejectWithValue}) =>{
        try{
            const refresh = localStorage.getItem('refresh')
            const response = await api.post('token/refresh/',{refresh})
            const {access} = response.data

            localStorage.setItem('access', access)    
            return jwtDecode(access)
        }
        catch (error){
            return rejectWithValue(error.response.data)
        }
    }
)



export const { logout, loadUser } = userSlice.actions;
export default userSlice.reducer;