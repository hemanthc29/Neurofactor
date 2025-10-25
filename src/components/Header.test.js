import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with logo', () => {
  render(<Header />);
  const logoElement = screen.getByText(/ChutNee/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Header />);
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const menuLink = screen.getByText(/Menu/i);
  const contactLink = screen.getByText(/Contact/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(menuLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});