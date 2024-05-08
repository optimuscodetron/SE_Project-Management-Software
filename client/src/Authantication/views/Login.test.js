
import React from 'react';
import Login from './Login';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

jest.mock('./auth.jpg', () => 'client/src/Authantication/views/auth.jpg');
jest.mock('react-router-dom');


const mockStore = createStore(() => ({
  userId: {
    value: 'mockUser'
  }
}));

it('renders TrackerX test', () => {
  const {getByText } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByText(/TrackerX/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders forgot test', () => {
  const {getByTestId } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const forgot = getByTestId('forgot', { name: /forgot/i })
  expect(forgot).toBeInTheDocument();
});

it('renders log in test', () => {
  const {getByText } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByText(/log in/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders account test', () => {
  const {getByTestId } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByTestId('dontHaveAccount', { name: /account/i });
  expect(linkElement).toBeInTheDocument();
});


it('renders password test', () => {
  const {getByPlaceholderText } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByPlaceholderText(/enter password/i);
  expect(linkElement).toBeInTheDocument();
});
it('renders email test', () => {
  const {getByPlaceholderText } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByPlaceholderText(/enter email/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders continue test', () => {
  const {getByRole } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByRole('button', { name: /continue/i })
  expect(linkElement).toBeInTheDocument();
});


it('renders sign test', () => {
  const {getByTestId } = render(
    <Provider store={mockStore}>
      <Login />
    </Provider>
  );
  const linkElement = getByTestId('testSignUp', { name: /sign up/i })
  expect(linkElement).toBeInTheDocument();
});


