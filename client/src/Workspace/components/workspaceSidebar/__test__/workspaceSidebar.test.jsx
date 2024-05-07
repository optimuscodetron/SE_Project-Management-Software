import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import WorkspaceSidebar from '..//workspaceSidebar';
import '@testing-library/jest-dom/extend-expect';

const mockOnOpenCreateProject = jest.fn();
const mockOnOpenInviteMembers = jest.fn();
const mockInboxOpened = jest.fn();

// Configure a mock store
const mockStore = configureMockStore();
const initialState = {
  currentWorkspace: {
    name: 'Test Workspace',
  },
};
const store = mockStore(initialState);

describe('WorkspaceSidebar Component', () => {
  const renderComponent = (showSideBar = true) => {
    render(
      <Provider store={store}>
        <Router>
          <WorkspaceSidebar
            showSideBar={showSideBar}
            currentWorkspace={store.getState().currentWorkspace}
            openWorkspace={() => {}}
            onOpenCreateProject={mockOnOpenCreateProject}
            onOpenInviteMembers={mockOnOpenInviteMembers}
            inboxOpened={mockInboxOpened}
          />
        </Router>
      </Provider>
    );
  };

  test('renders the component and displays all required elements', () => {
    renderComponent();
    expect(screen.getByText('Workspace 1')).toBeInTheDocument();
    expect(screen.getByText('Workspace Settings')).toBeInTheDocument();
    expect(screen.getByText('Invite Members')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
    expect(screen.getByText('Create Workspace')).toBeInTheDocument();
  });

  test('handles click event for Invite Members', () => {
    renderComponent();
    const inviteMembersButton = screen.getByText('Invite Members');
    fireEvent.click(inviteMembersButton);
    expect(mockOnOpenInviteMembers).toHaveBeenCalled();
  });

  test('handles click event for Inbox', () => {
    renderComponent();
    const inboxButton = screen.getByText('Inbox');
    fireEvent.click(inboxButton);
    expect(mockInboxOpened).toHaveBeenCalled();
  });

  test('handles click event for Create Workspace', () => {
    renderComponent();
    const createWorkspaceButton = screen.getByText('Create Workspace');
    fireEvent.click(createWorkspaceButton);
    expect(window.location.pathname).toBe('/create_workspace');
  });

});
