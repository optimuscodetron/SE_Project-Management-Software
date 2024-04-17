
import { createSlice } from '@reduxjs/toolkit';

export const activeProjectSprintListSlice = createSlice({
  name: 'activeProjectSprintList',
  initialState: {
    value: [],
  },
  reducers: {
    changeActiveProjectSprintList: (state, action) => {
      state.value = action.payload;
    },
    addSprintToProject: (state, action) => {
      state.value.push(action.payload); // Push the new member to the value array
    },
    removeSprintFromProject: (state, action) => {
      state.value = state.value.filter(member => member.id !== action.payload.id); // Filter out the member with the specified ID
    },
  },
});

export const { changeActiveProjectSprintList,addSprintToProject,removeSprintFromProject } = activeProjectSprintListSlice.actions;

export default activeProjectSprintListSlice.reducer;
