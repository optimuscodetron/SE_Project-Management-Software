import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: null,
// }

const workspaceNameIdSlice = createSlice({
  name: 'workspaceNameId',
  initialState:{
    value: {},
  },
  reducers: {
    changeWorkspaceNameId: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log(action.payload);
      state.value= action.payload
      
    },
    changeWorkspaceName: (state, action) => {
      state.value.name = action.payload; // Update only the name
    },

    
  },
})

// Action creators are generated for each case reducer function
export const { changeWorkspaceNameId,changeWorkspaceName } = workspaceNameIdSlice.actions

export default workspaceNameIdSlice.reducer