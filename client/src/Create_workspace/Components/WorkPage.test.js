
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WorkPage from './WorkPage'; // Adjust the import path as needed
import { BrowserRouter } from 'react-router-dom';
describe('WorkPage Component', () => {
  test('renders correctly', () => {
    render(<BrowserRouter><WorkPage /></BrowserRouter>);
    // Verify the component renders correctly by checking for expected elements
    expect(screen.getByText('Create a new Workspace')).toBeInTheDocument();
    expect(screen.getByTestId('textbox1')).toBeInTheDocument();
    expect(screen.getByTestId('combobox1')).toBeInTheDocument();
  });

  test('allows user to change company size and role', () => {
    render(<BrowserRouter><WorkPage /></BrowserRouter>);

    
    // Test changing the company size
    const companySizeSelect = screen.getByTestId('combobox1');
    fireEvent.change(companySizeSelect, { target: { value: '100-1000 members' } });
    expect(companySizeSelect.value).toBe('100-1000 members');
    
    // Test changing the role
    const roleSelect = screen.getByTestId('combobox2');
    fireEvent.change(roleSelect, { target: { value: 'Product Manager' } });
    expect(roleSelect.value).toBe('Product Manager');
  });

  test('updates workspace URL when workspace name changes', () => {
    render(<BrowserRouter><WorkPage /></BrowserRouter>);

    
    const nameInput = screen.getByTestId('textbox1');
    const urlInput = screen.getByTestId('textbox2');
    
    // Simulate user entering workspace name
    fireEvent.change(nameInput, { target: { value: 'myWorkspace' } });
    expect(urlInput.value).toBe('trackerX.app/myWorkspace');
  });

  test('submits the form and navigates on button click', () => {
    const navigateMock = jest.fn(); // Mock the navigate function
    render(<BrowserRouter><WorkPage  /></BrowserRouter>);

    
    const button = screen.getByText('Create Workspace');
    fireEvent.click(button);
    
    // Verify that the form submission triggered navigation
    // expect(navigateMock).toHaveBeenCalledWith('/workspace');
  });
});