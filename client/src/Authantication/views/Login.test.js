
import React from 'react';
import Login from './Login';
import { screen, render } from '@testing-library/react';

jest.mock('./auth.jpg', () => 'client/src/Authantication/views/auth.jpg');
jest.mock('react-router-dom');



test('renders TrackerX test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/TrackerX/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders forgot test', () => {
  render(<Login/>);
  const forgot=screen.getByTestId('forgot', {  name: /forgot/i})
expect(forgot).toBeInTheDocument();
});

test('renders log in test', () => {
  render(<Login/>);
  const linkElement = screen.getByText(/log in/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders account test', () => {
  render(<Login/>);
  const linkElement = screen.getByTestId('dontHaveAccount',{name:/account/i});
  expect(linkElement).toBeInTheDocument();
});


test('renders password test', () => {
  render(<Login/>);
  const linkElement = screen.getByPlaceholderText(/enter password/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders email test', () => {
  render(<Login/>);
  const linkElement = screen.getByPlaceholderText(/enter email/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders continue test', () => {
  render(<Login/>);
  const linkElement = screen.getByRole('button', {  name: /continue/i})
  expect(linkElement).toBeInTheDocument();
});


test('renders sign test', () => {
  render(<Login/>);
  const linkElement = screen.getByTestId('testSignUp', {  name: /sign up/i})
  expect(linkElement).toBeInTheDocument();
});


