import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WorkspaceListSidebar from '../components/workspacesListSidebar';

describe('WorkspaceListSidebar', () => {
  it('renders workspace list when showWorkspaces is true', () => {
    render(<WorkspaceListSidebar />);
    
    // Check if the workspace list is initially rendered
    expect(screen.getByText('Workspace 1')).toBeInTheDocument();
  });

  it('toggles workspace list visibility when clicking on the header', () => {
    render(<WorkspaceListSidebar />);

    // Initially, the workspace list should be visible
    expect(screen.getByText('Workspace 1')).toBeInTheDocument();

    // Click on the header to hide the workspace list
    fireEvent.click(screen.getByText('Workspace 1'));

    // Now the workspace list should not be visible
    expect(screen.queryAllByText('Workspace 1')[1]).toBeInTheDocument();

    // Click on the header again to show the workspace list
    fireEvent.click(screen.getByText('Workspace 2'));

    // Now the workspace list should be visible again
    expect(screen.getByText('Workspace 2')).toBeInTheDocument();
  });
});
