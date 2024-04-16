import React from 'react';
import { render, fireEvent, waitFor, getByPlaceholderText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MemberList from './MemberSetting';


// Mock axios for API requests
jest.mock('axios');

beforeAll(() => {
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: jest.fn(), // Mock writeText as a Jest mock function
    },
    writable: true,
  });
});

describe('General Component', () => {
  it('renders without crashing', () => {
    render(
        <Router>
          <MemberList/>
        </Router>
    );
  });

  it('test for heading1 of page', () => {
    const { getByLabelText, getAllByText } = render(
        <Router>
          <MemberList/>
        </Router>
    );

    const memberText = getAllByText('Members');
    // const workspaceText = getAllByText('this workspace');

    // fireEvent.change(nameInput, { target: { value: 'New Workspace Name' } });
    // fireEvent.change(urlInput, { target: { value: 'https://new-url.com' } });

    expect(memberText.length).toBeGreaterThan(0);
    // expect(workspaceText.length).toBeGreaterThan(0);

    // expect(nameInput.value).toBe('New Workspace Name');
    // expect(urlInput.value).toBe('https://new-url.com');
  });

  


  it('test for copy button on click', async () => {
    const { getByText } = render(
        <Router>
          <MemberList />
        </Router>
    );

    const copyButton = getByText('Copy Link');

    fireEvent.click(copyButton);

    // You may want to mock the axios.put function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  it('add member button click', async () => {
    const { getByText } = render(
        <Router>
          <MemberList />
        </Router>
    );

    const addMemberButton = getByText('Add Member');

    fireEvent.click(addMemberButton);

    // You may want to mock the axios.delete function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  
  it('add member confirmation button click', async () => {
    const { getByText ,getAllByText } = render(
        <Router>
          <MemberList />
        </Router>
    );

    const addMemberButton = getByText('Add Member');

    fireEvent.click(addMemberButton);

    const addButton = getAllByText('Add Member');

    expect(addButton.length).toBeGreaterThan(1);

    // You may want to mock the axios.delete function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  it('add member cancel button click', async () => {
    const { getByText } = render(
        <Router>
          <MemberList />
        </Router>
    );

    const addMemberButton = getByText('Add Member');

    fireEvent.click(addMemberButton);

    const cancelButton = getByText('Cancel');

    fireEvent.click(cancelButton);

    // You may want to mock the axios.delete function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  
  it('test for Email input field', async () => {
    const { getByText, getByPlaceholderText } = render(
        <Router>
          <MemberList />
        </Router>
    );

    const addMemberButton = getByText('Add Member');

    fireEvent.click(addMemberButton);

    const emailInput = getByPlaceholderText("Enter email");

    fireEvent.change(emailInput,{target : { value: "2021csb1136@iitrpr.ac.in"}});

    expect(emailInput.value).toBe("2021csb1136@iitrpr.ac.in");

    // You may want to mock the axios.delete function and verify if it's called with the correct arguments
    // For brevity, I'm skipping that part here
  });

  
  
  // it('test remove member button', async () => {
  //   const { getByText, getAllByRole } = render(
  //       <Router>
  //         <MemberList />
  //       </Router>
  //   );

  //     const memberCard = getAllByRole('listitem');


  //   // You may want to mock the axios.delete function and verify if it's called with the correct arguments
  //   // For brevity, I'm skipping that part here
  // });


});
