import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import api from '../../../api'

export const fetchGroups = createAsyncThunk(
    'groups/fetchGroups',
    async ({search='',page=1},{ rejectWithValue }) => {
        try{
            const response = await api.get('groups/',{
                params:{search,page}
            })
             console.log(response.data)
            return response.data
           
        }
        catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)

const groupSlice = createSlice({
    name:'group',
    initialState:{
      groups:[],
      status:null,
      error:null,
      count:0,
      next:null,
      previous:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchGroups.pending, (state)=> {
            state.status = 'loading'
        })
        .addCase(fetchGroups.fulfilled, (state,action)=>{
            state.status ='success'
            state.groups = action.payload.results
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
        })
        .addCase(fetchGroups.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })

    }
})

export default groupSlice.reducer