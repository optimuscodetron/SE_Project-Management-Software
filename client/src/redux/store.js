import { configureStore } from '@reduxjs/toolkit'
import workspaceIdReducer from './WorkspaceData/WorkspaceIdSlice'

export const store = configureStore({
  reducer: {
    workspaceId: workspaceIdReducer,
  },
})