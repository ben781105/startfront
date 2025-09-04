import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import api from '../../../api'
import { toast } from 'react-toastify'

export const fetchGroups = createAsyncThunk(
    'groups/fetchGroups',
    async ({search='',page=1},{ rejectWithValue }) => {
        try{
            const response = await api.get('groups/',{
                params:{search,page}
            })
            return response.data
            
        }
        catch(error){
            return rejectWithValue(error.response?.data)
        }
    }
)
export const createGroup = createAsyncThunk(
  "group/createGroup",
  async (groupName, { rejectWithValue }) => {
    try {
      const response = await api.post("groups/create/", { name: groupName });
      toast.success("Group created successfully");
      return response.data;
      
    } catch (error) {
      return rejectWithValue(
        toast.error(error.response?.data || { error: "Something went wrong" })
      );
    }
  }
);

export const editGroup = createAsyncThunk(
    'group/editGroup',
    async ({id,name},{rejectWithValue})=>{
        try{
            const response = await api.put(`groups/${id}/update/`,{name})
            toast.success("Group updated successfully")
            return response.data
        } catch(error){
            return rejectWithValue(
                toast.error(error.response?.data || { error: "Failed to update group" })
            )
        }
    }
)

export const deleteGroup = createAsyncThunk(
    'group/deleteGroup',
    async(groupId,{rejectWithValue})=>{
        try{
            await api.delete(`groups/${groupId}/delete/`)
            toast.success("Group deleted successfully")
            return groupId
        } catch(error){
            return rejectWithValue(
                toast.error(error.response?.data || { error: "Failed to delete group" })
            )
        }
    }
)

export const addContactsToGroup= createAsyncThunk(
    'group/addContactsToGroup',
    async({groupId,phoneNumbers},{rejectWithValue})=>{
        try{
            
            const response = await api.post(`groups/${groupId}/contacts/add/`,{
                phone_numbers:phoneNumbers
            })
            toast.success("Contact(s) added to group successfully")
            return response.data
        } catch(error){
            return rejectWithValue(
                toast.error(error.response?.data || { error: "Failed to add contacts" })
            )
        }
    }
)

const groupSlice = createSlice({
    name:'group',
    initialState:{
      groups:[],
      loading:false,
      error:null,
      count:0,
      next:null,
      previous:null,
      page_size:10,
      page:1,
      
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchGroups.pending, (state)=> {
            state.loading = true  
            state.error = null
        })
        .addCase(fetchGroups.fulfilled, (state,action)=>{
            state.loading = false
            state.error = null
            state.groups = action.payload.results
            state.count = action.payload.count
            state.next = action.payload.next
            state.previous = action.payload.previous
        })
        .addCase(fetchGroups.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(createGroup.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(createGroup.fulfilled,(state,action)=>{
            state.loading =false
            state.error = null
            state.groups.push(action.payload)
        })
        .addCase(createGroup.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        }   )
        .addCase(editGroup.pending, (state)=> {
            state.loading = true  
            state.error = null
        })
        .addCase(editGroup.fulfilled,(state,action)=>{
            state.loading = false
            const updatedGroup = action.payload
            const index = state.groups.findIndex(
                (group)=> group.id === updatedGroup.id
            )
            if(index !== -1){
                state.groups[index].name = updatedGroup.name
            }
        })
        .addCase(editGroup.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        .addCase(deleteGroup.fulfilled, (state, action) => {
        state.loading= false;
        state.groups = state.groups.filter(group => group.id !== action.payload);
        })
        .addCase(deleteGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || action.error.message;
        })
        .addCase(addContactsToGroup.fulfilled, (state, action) => {
        state.loading = false;
        const { added_contacts, group } = action.payload;
        const index = state.groups.findIndex(g => g.id === group);
        if (index !== -1) {
        state.groups[index].contact_count += added_contacts.length; 
       }
        })
        .addCase(addContactsToGroup.rejected, (state, action) => {
        state.error = action.payload?.error || action.error.message;
        state.loading = false;
        })

    }
})

export default groupSlice.reducer