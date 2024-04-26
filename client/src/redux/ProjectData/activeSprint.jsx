import { createSlice } from '@reduxjs/toolkit';

export const activeSprint = createSlice({
  name: 'activeSprint',
  initialState: {
    value: {},
  },
  reducers: {
    changeActiveSprint:(state,action)=>{
        state.value=action.payload;
    },
  },
});

export const { changeActiveSprint } = activeSprint.actions;

export default activeSprint.reducer;