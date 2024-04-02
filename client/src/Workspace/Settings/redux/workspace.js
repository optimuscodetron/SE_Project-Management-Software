// redux/workspace.js

export const SET_ACTIVE_WORKSPACE = 'SET_ACTIVE_WORKSPACE';

export const setActiveWorkspace = (workspace) => ({
  type: SET_ACTIVE_WORKSPACE,
  payload: workspace,
});

const initialState = {
  activeWorkspace: null,
};

export const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_WORKSPACE:
      return {
        ...state,
        activeWorkspace: action.payload,
      };
    default:
      return state;
  }
};
