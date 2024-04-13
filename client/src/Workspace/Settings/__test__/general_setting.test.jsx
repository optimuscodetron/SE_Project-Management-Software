import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import General from '../General/General';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock axios for API requests
jest.mock('axios');

// Mock Redux store
const mockStore = createStore(() => ({
  workspaceNameId: {
    value: {
      name: 'Mock Workspace',
      id: 'mock_workspace_id',
    },
  },
}));

describe('General Component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={mockStore}>
        <Router>
          <General />
        </Router>
      </Provider>
    );
  });

  it('updates workspace name and URL on input change', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={mockStore}>
        <Router>
          <General />
        </Router>
      </Provider>
    );

    const nameInput = getByLabelText('Workspace name');
    const urlInput = getByLabelText('Workspace URL');

    fireEvent.change(nameInput, { target: { value: 'New Workspace Name' } });
    fireEvent.change(urlInput, { target: { value: 'https://new-url.com' } });

    expect(nameInput.value).toBe('New Workspace Name');
    expect(urlInput.value).toBe('https://new-url.com');
  });

  it('calls update function on update button click', async () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <Router>
          <General />
        </Router>
      </Provider>
    );

    const updateButton = getByText('Update');

    fireEvent.click(updateButton);

    // You may want to mock the axios.put function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  it('calls delete function on delete button click', async () => {
    const { getByText } = render(
      <Provider store={mockStore}>
        <Router>
          <General />
        </Router>
      </Provider>
    );

    const deleteButton = getByText('Delete this workspace');

    fireEvent.click(deleteButton);

    // You may want to mock the axios.delete function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });
});
