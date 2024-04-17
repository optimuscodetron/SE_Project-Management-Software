import { createSlice } from '@reduxjs/toolkit'

const workspaceMemberListSlice = createSlice({
  name: 'workspaceMemberList',
  initialState:{
    value: [],
  },
  reducers: {
    changeworkspaceMemberList: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log(action.payload);
      state.value= action.payload
      
    }, 
    addMemberToWorkspace: (state, action) => {
      state.value.push(action.payload); // Push the new member to the value array
    },
    removeMemberFromWorkspace: (state, action) => {
      state.value = state.value.filter(member => member.id !== action.payload.id); // Filter out the member with the specified ID
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeworkspaceMemberList,addMemberToWorkspace,removeMemberFromWorkspace } = workspaceMemberListSlice.actions

export default workspaceMemberListSlice.reducer