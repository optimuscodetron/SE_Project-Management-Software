import { configureStore,combineReducers } from '@reduxjs/toolkit'
import workspaceNameIdReducer from './WorkspaceData/WorkspaceNameIdSlice'
import activeProjectReducer from './ProjectData/activeProjectSlice'
import userIdReducer from './userId/userIdSlice' // import the new reducer
import activeProjectIssuesReducer from './ProjectData/activeProjectIssuesSlice'
import WorkspaceMemberListReducer from './WorkspaceData/WorkspaceMemberListSlice'
import activeProjectAllMemberReducer from './ProjectData/activeProjectAllMemberSlice'
import activeProjectSprintListReducer from './ProjectData/activeProjectSprintListSlice'
import activeIssueReducer from './issueId/activeIssueSlice' 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import activeSprintReducer from './ProjectData/activeSprint'
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  activeProjectIssues:activeProjectIssuesReducer,
  workspaceNameId: workspaceNameIdReducer,
  activeProject: activeProjectReducer,
  userId: userIdReducer,
  WorkspaceMemberList:WorkspaceMemberListReducer,
  activeProjectAllMember:activeProjectAllMemberReducer,
  activeProjectSprintList:activeProjectSprintListReducer,
  activeIssue: activeIssueReducer,
  activeSprint:activeSprintReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})


export const persistor = persistStore(store)