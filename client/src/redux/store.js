import { configureStore,combineReducers } from '@reduxjs/toolkit'
import workspaceNameIdReducer from './WorkspaceData/WorkspaceNameIdSlice'
import activeProjectReducer from './ProjectData/activeProjectSlice'
import userIdReducer from './userId/userIdSlice' // import the new reducer
import activeProjectIssuesReducer from './ProjectData/activeProjectIssuesSlice'
import WorkspaceMemberListReducer from './WorkspaceData/WorkspaceMemberListSlice'
import activeProjectAllMemberReducer from './ProjectData/activeProjectAllMemberSlice'
import activeProjectSprintListReducer from './ProjectData/activeProjectSprintListSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

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
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})


export const persistor = persistStore(store)