
import { createSlice } from '@reduxjs/toolkit';

export const activeProjectAllMemberSlice = createSlice({
  name: 'activeProjectAllMember',
  initialState: {
    value: [],
  },
  reducers: {
    changeActiveProjectAllMember: (state, action) => {
      state.value = action.payload;
    },
    addMemberToProject: (state, action) => {
      state.value.push(action.payload); // Push the new member to the value array
    },
    removeMemberFromProject: (state, action) => {
      state.value = state.value.filter(member => member.id !== action.payload.id); // Filter out the member with the specified ID
    },
  },
});

export const { changeActiveProjectAllMember,addMemberToProject,removeMemberFromProject } = activeProjectAllMemberSlice.actions;

export default activeProjectAllMemberSlice.reducer;
