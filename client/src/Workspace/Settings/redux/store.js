// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { workspaceReducer } from './workspace';

const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
});

export default store;
