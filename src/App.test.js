import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChutNee header', () => {
  render(<App />);
  const headerElement = screen.getByText(/ChutNee/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Welcome to ChutNee/i);
  expect(heroElement).toBeInTheDocument();
});

test('renders features section', () => {
  render(<App />);
  const featuresElement = screen.getByText(/Why Choose ChutNee?/i);
  expect(featuresElement).toBeInTheDocument();
});