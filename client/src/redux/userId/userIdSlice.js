// userIdSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userIdSlice = createSlice({
  name: 'userId',
  initialState: {
    value: null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUserId } = userIdSlice.actions;

export default userIdSlice.reducer;
