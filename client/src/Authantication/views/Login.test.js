
import React from 'react';
import Login from './Login';
import { screen, render } from '@testing-library/react';

jest.mock('./auth.jpg', () => 'client/src/Authantication/views/auth.jpg');
jest.mock('react-router-dom');

// test("render text account in Login", () => {
//   render(<Login />);

//   const accountText = screen.getAllByText(/Forgot/i);
//   const accountTextPresent = accountText.some(element =>
//     element.closest('body')
//   );
//   expect(accountTextPresent).toBe(true);

//   // const elementText = screen.getByText('account', {selector: 'div'});
//   // expect(elementText).toBeInTheDocument();
// });





// import { render, screen } from '@testing-library/react';
// import Login from './Login';

test('renders TrackerX test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/TrackerX/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders forgot test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Forgot/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders log in test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/log in/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders account test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/account/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders password test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/password/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders continue test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/continue/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders sign test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/Sign/i);
  expect(linkElement).toBeInTheDocument();
});


