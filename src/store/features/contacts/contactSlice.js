import { createSlice } from "@reduxjs/toolkit";
import api from "../../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk(
    'contact/fetchContacts',
    async ({search='',page=1,url=null},{ rejectWithValue }) => {
        try{
        const response = url
        ? await api.get(url) 
        : await api.get('contact_list/', { params: { search, page } })
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
    page_size: null,
    page: null,
    count: 0,  
    next: null,
    previous: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading= true;
        state.results = action.payload.results; 
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.page_size = action.payload.page_size;
        state.page = action.payload.page;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading= false;
        state.error = action.payload;
      });
  }
});



export default contactSlice.reducer