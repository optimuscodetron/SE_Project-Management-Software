import React from 'react';
import { render, screen, fireEvent , waitFor} from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import ProjectSettingSprint from '../Components/ProjectSettingSprint';
import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import { createStore } from "redux";


describe('ProjectSettingSprint', () => {
  let store;

  beforeEach(() => {
    const mockStore = createStore(() => ({
        workspaceNameId: { value: { name: 'Test Workspace' } },
      activeProject: {
        value: { name: 'Test Project', _id: '123' },
      },
      activeProjectSprintList: {
        value: [],
      },
      }));
    store = mockStore;
  });

  test('renders component and displays required elements', () => {
    render(
      <Provider store={store}>
        <ProjectSettingSprint />
      </Provider>
    );

    expect(screen.getAllByText(/Create Sprint/i)[0]).toBeInTheDocument();

    expect(screen.getAllByLabelText(/Sprint Name/i)[0]).toBeInTheDocument();

    expect(screen.getByLabelText(/Select Start Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select End Date/i)).toBeInTheDocument();

    expect(screen.getAllByText(/Create Sprint/i)[1]).toBeInTheDocument();
  });

  test('handles input changes', () => {
    render(
      <Provider store={store}>
        <ProjectSettingSprint />
      </Provider>
    );

    const sprintNameInput = screen.getAllByLabelText(/Sprint Name/i)[0];
    fireEvent.change(sprintNameInput, { target: { value: 'Sprint 1' } });
    expect(sprintNameInput.value).toBe('Sprint 1');

    const startDateInput = screen.getByLabelText(/Select Start Date/i);
    fireEvent.change(startDateInput, { target: { value: '2024-05-01' } });
    expect(startDateInput.value).toBe('2024-05-01');

    const endDateInput = screen.getByLabelText(/Select End Date/i);
    fireEvent.change(endDateInput, { target: { value: '2024-05-31' } });
    expect(endDateInput.value).toBe('2024-05-31');
  });

  test('handles Create Sprint button click with valid data', async () => {
    render(
      <Provider store={store}>
        <ProjectSettingSprint />
      </Provider>
    );

    const sprintNameInput = screen.getByLabelText(/Sprint Name/i);
    const startDateInput = screen.getByLabelText(/Select Start Date/i);
    const endDateInput = screen.getByLabelText(/Select End Date/i);
    const createSprintButton = screen.getAllByText(/Create Sprint/i)[1];

    fireEvent.change(sprintNameInput, { target: { value: 'Sprint 1' } });
    fireEvent.change(startDateInput, { target: { value: '2024-05-01' } });
    fireEvent.change(endDateInput, { target: { value: '2024-05-31' } });

    fireEvent.click(createSprintButton);


  });

  test('handles Create Sprint button click with invalid data', async () => {
    render(
      <Provider store={store}>
        <ProjectSettingSprint />
      </Provider>
    );

    const createSprintButton = screen.getAllByText(/Create Sprint/i)[1];

    fireEvent.click(createSprintButton);

    await waitFor(() => {
      expect(screen.getByText(/Please enter Sprint Name!!/i)).toBeInTheDocument();
    });
  });

});
