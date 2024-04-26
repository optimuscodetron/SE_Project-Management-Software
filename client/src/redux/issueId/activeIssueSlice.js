// activeIssueSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const activeIssueSlice = createSlice({
  name: 'activeIssue',
  initialState: {
    value: {},
  },
  reducers: {
    changeActiveIssue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActiveIssue } = activeIssueSlice.actions;

export default activeIssueSlice.reducer;
