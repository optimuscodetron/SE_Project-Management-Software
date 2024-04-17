
import { createSlice } from '@reduxjs/toolkit';

export const activeProjectIssueSlice = createSlice({
  name: 'activeProjectIssue',
  initialState: {
    value: {},
  },
  reducers: {
    changeActiveProjectIssue: (state, action) => {
      state.value = action.payload;
    },
    changeIssueStage: (state, action) => {
      const { issueId, newStage } = action.payload;
      const index = state.value.findIndex(issue => issue._id === issueId);
      // Check if the issue exists in the state
      if (index !== -1) {
        // Update the stage of the issue
        state.value[index].stage = newStage;
      } else {
        console.error(`Issue with ID ${issueId} not found.`);
      }
    },
  },
});

export const { changeActiveProjectIssue, changeIssueStage } = activeProjectIssueSlice.actions;

export default activeProjectIssueSlice.reducer;
