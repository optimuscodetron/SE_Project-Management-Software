
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
    
    changeActiveProjectField: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      // Check if the project details object exists
      if (state.value) {
        // Update the specified field
        state.value[fieldName] = fieldValue;
      }
    },
  },
});

export const { changeActiveProject,changeActiveProjectField } = activeProjectSlice.actions;

export default activeProjectSlice.reducer;
