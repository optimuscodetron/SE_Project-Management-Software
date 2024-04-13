
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
  },
});

export const { changeActiveProjectIssue } = activeProjectIssueSlice.actions;

export default activeProjectIssueSlice.reducer;
