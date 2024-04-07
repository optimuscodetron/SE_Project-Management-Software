
import { createSlice } from '@reduxjs/toolkit';

export const activeProjectSlice = createSlice({
  name: 'activeProject',
  initialState: {
    value: {},
  },
  reducers: {
    changeActiveProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActiveProject } = activeProjectSlice.actions;

export default activeProjectSlice.reducer;
