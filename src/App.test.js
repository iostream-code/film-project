import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/XXI FILM/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders trending and film list sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /trending/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /list hero/i })).toBeInTheDocument();
});
