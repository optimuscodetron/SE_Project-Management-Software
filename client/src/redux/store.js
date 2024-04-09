import { configureStore,combineReducers } from '@reduxjs/toolkit'
import workspaceNameIdReducer from './WorkspaceData/WorkspaceNameIdSlice'
import activeProjectReducer from './ProjectData/activeProjectSlice'
import userIdReducer from './userId/userIdSlice' // import the new reducer
import activeIssueReducer from './issueId/activeIssueSlice' 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  workspaceNameId: workspaceNameIdReducer,
  activeProject: activeProjectReducer,
  userId: userIdReducer,
    activeIssue: activeIssueReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})


export const persistor = persistStore(store)