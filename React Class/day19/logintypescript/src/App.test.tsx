import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


/// Unit Tests --> These are tests written to test your single function code
// Expected Return (which you expected from the API)
// Result you got

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// TDD (Test Driven Development) (very ideal)
// Write code First and then test it (very Common)