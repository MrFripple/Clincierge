import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';


test('renders Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Food Images/i);

  expect(linkElement).toBeInTheDocument();
});
