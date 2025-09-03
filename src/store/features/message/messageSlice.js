import { createSlice} from "@reduxjs/toolkit";
import api from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

 export const sendMessage = createAsyncThunk(
    'message/sendMessage',
    async ({phoneNumbers,message},{rejectWithValue})=>{
        try{
            const phoneList = phoneNumbers.split(',').map((number) => number.trim());

            const response = await api.post('send-sms/', {
                message:message,
                recipients:phoneList
            })
            return response.data
        } catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)

 export const sendMessageToGroup = createAsyncThunk(
    'message/sendMessageToGroup',
    async ({groupIds,message},{rejectWithValue})=>{
        try{
            const response = await api.post('send-sms/', {
                message:message,
                group_ids:groupIds
            })
            return response.data
        } catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)

export const fetchSMSHistory = createAsyncThunk(
    'message/fetchSMSHistory',
    async({page=1,search=''},{rejectWithValue})=>{
        try{
            const response = await api.get(`smshistory/?page=${page}&search=${search}`)
            return response.data
        } catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)
        

const messageSlice = createSlice({
    name:'message',
    initialState:{
        loading:false,
        error:false,
        success:false,
        history:[],
        next:null,
        previous:null,
        count:0,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(sendMessage.pending,(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        })
        .addCase(sendMessage.fulfilled,(state)=>{
            state.loading = false
            state.success = true
        })
        .addCase(sendMessage.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload || action.error.message
        })
        .addCase(fetchSMSHistory.pending,(state)=>{
            state.loading = true
            state.error = null
            state.success = false
        })
        .addCase(fetchSMSHistory.fulfilled,(state,action)=>{
            state.loading = false
            state.history = action.payload.results
            state.next = action.payload.next;     
            state.previous = action.payload.previous; 
            state.count = action.payload.count; 
        })
        .addCase(fetchSMSHistory.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload || action.error.message
        })
    }
   
})

export default messageSlice.reducer