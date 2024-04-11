import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WorkPage from './WorkPage';

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ data: { workspace: {} } }))
}));

test('Test text', () => {
  render(<BrowserRouter><WorkPage /></BrowserRouter>);

  const expectedTexts = [
    "Create a new Workspace",
    "Workspaces are shared environments where teams can work on projects",
    "cycle and tasks",
    "Workspace name",
    "Workspace url",
    "How large is your Company",
    "What is your role?",
    "Create Workspace",
    "Just me",
    "1-100 members",
    "100-1000 members",
    "1000 and more",
    "Select your role in company",
    "Founder or leadership team",
    "Engineering Manager",
    "Product Manager",
    "Designer"
  ];

  expectedTexts.forEach((text) => {
    const element = screen.getByText(text);
    expect(element).toBeInTheDocument();
  });
});

test('Test input boxes', () => {
  render(<BrowserRouter><WorkPage /></BrowserRouter>);

  // Get the input boxes by their data-testid attributes
  const workspaceNameTextbox = screen.getByTestId('textbox1');
  const workspaceUrlTextbox = screen.getByTestId('textbox2');

  // Check if the input boxes are rendered
  expect(workspaceNameTextbox).toBeInTheDocument();
  expect(workspaceUrlTextbox).toBeInTheDocument();

  // Test typing in the input boxes
  fireEvent.change(workspaceNameTextbox, { target: { value: 'Test Workspace' } });

  // Check if the input values are updated correctly
  expect(workspaceNameTextbox.value).toBe("Test Workspace");
  expect(workspaceUrlTextbox.value).toBe("trackerX.app/" + "Test Workspace");
})


test('Test combobox', () => {
  render(<BrowserRouter><WorkPage /></BrowserRouter>);

  const companysizeCombobox = screen.getByTestId('combobox1');
  const yourroleCombobox = screen.getByTestId('combobox2');

  expect(companysizeCombobox).toBeInTheDocument();
  expect(yourroleCombobox).toBeInTheDocument();

  fireEvent.change(companysizeCombobox, { target: { value: '1000 and more' } });
  fireEvent.change(yourroleCombobox, { target: { value: 'Designer' } });


  expect(companysizeCombobox.value).toBe("1000 and more");
  expect(yourroleCombobox.value).toBe("Designer");
})
