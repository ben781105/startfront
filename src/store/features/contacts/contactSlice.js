import { createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    'contact/fetchContacts',
    async ({search='',page=1},{ rejectWithValue }) => {
        try{
            const response = await api.get('contact_list/',{
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

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    results: [],
    count: 0,  
    next: null,
    previous: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "success";
        state.results = action.payload.results; 
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});



export default contactSlice.reducer