
import React from 'react';
import { screen, render } from '@testing-library/react';
import Registration from "./Registration";


jest.mock('./auth.jpg', () => 'client/src/Authantication/views/auth.jpg');
jest.mock('react-router-dom');

test('renders trackerX test', () => {
    render(<Registration/>);
    const linkElement = screen.getByText(/TrackerX/i);
    expect(linkElement).toBeInTheDocument();
  });

  
test('sign up', () => {
    render(<Registration/>);
    const linkElement = screen.getByText(/sign up/i);
    expect(linkElement).toBeInTheDocument();
  });

  
test('renders account test', () => {
    render(<Registration/>);
    const linkElement = screen.getByText(/account/i);
    expect(linkElement).toBeInTheDocument();
  });

  
test('renders login test', () => {
    render(<Registration/>);
    const linkElement = screen.getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
  });
