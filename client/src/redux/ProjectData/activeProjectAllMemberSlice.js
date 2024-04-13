
import { createSlice } from '@reduxjs/toolkit';

export const activeProjectAllMemberSlice = createSlice({
  name: 'activeProjectAllMember',
  initialState: {
    value: {},
  },
  reducers: {
    changeActiveProjectAllMember: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeActiveProjectAllMember } = activeProjectAllMemberSlice.actions;

export default activeProjectAllMemberSlice.reducer;
