import { configureStore } from '@reduxjs/toolkit'
import workspaceNameIdReducer from './WorkspaceData/WorkspaceNameIdSlice'

export const store = configureStore({
  reducer: {
    workspaceNameId: workspaceNameIdReducer,
  },
})