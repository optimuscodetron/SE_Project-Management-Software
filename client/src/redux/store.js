import { configureStore } from '@reduxjs/toolkit'
import workspaceNameIdReducer from './WorkspaceData/WorkspaceNameIdSlice'
import activeProjectReducer from './ProjectData/activeProjectSlice'
import userIdReducer from './userId/userIdSlice' // import the new reducer
import activeIssueReducer from './issueId/activeIssueSlice' 
export const store = configureStore({
  reducer: {
    workspaceNameId: workspaceNameIdReducer,
    activeProject: activeProjectReducer,
    userId: userIdReducer,
    activeIssue: activeIssueReducer,
  },
})
