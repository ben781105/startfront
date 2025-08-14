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
export const createGroup = createAsyncThunk(
  "group/createGroup",
  async (groupName, { rejectWithValue }) => {
    try {
      const response = await api.post("groups/create/", { name: groupName });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { error: "Something went wrong" }
      );
    }
  }
);

export const editGroup = createAsyncThunk(
    'group/editGroup',
    async ({id,name},{rejectWithValue})=>{
        try{
            const response = await api.put(`groups/${id}/update/`,{name})
            return response.data
        } catch(error){
            return rejectWithValue(
                error.response?.data || { error: "Failed to update group" }
            )
        }
    }
)

export const deleteGroup = createAsyncThunk(
    'group/deleteGroup',
    async(groupId,{rejectWithValue})=>{
        try{
            await api.delete(`groups/${groupId}/delete/`)
            return groupId
        } catch(error){
            return rejectWithValue(
                error.response?.data || { error: "Failed to delete group" }
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

            return response.data
        } catch(error){
            return rejectWithValue(
                error.response?.data || { error: "Failed to add contacts" }
            )
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
      previous:null,
    
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
        .addCase(createGroup.pending,(state)=>{
            state.status = 'loading'
            state.error = null
        })
        .addCase(createGroup.fulfilled,(state,action)=>{
            state.status = 'success'
            state.groups.push(action.payload)
        })
        .addCase(createGroup.rejected,(state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        }   )
        .addCase(editGroup.fulfilled,(state,action)=>{
            const updatedGroup = action.payload
            const index = state.groups.findIndex(
                (group)=> group.id === updatedGroup.id
            )
            if(index !== -1){
                state.groups[index].name = updatedGroup.name
            }
        })
        .addCase(editGroup.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
        .addCase(deleteGroup.fulfilled, (state, action) => {
        state.status = 'success';
        state.groups = state.groups.filter(group => group.id !== action.payload);
        })
        .addCase(deleteGroup.rejected, (state, action) => {
        state.error = action.payload?.error || action.error.message;
        })
        .addCase(addContactsToGroup.fulfilled, (state, action) => {
         const { added_contacts, group } = action.payload;
         const index = state.groups.findIndex(g => g.id === group);
        if (index !== -1) {
        state.groups[index].contact_count += added_contacts.length; 
       }
})

    }
})

export default groupSlice.reducer