import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();

    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, {
      target: {value: 'React'},
    })
    screen.debug();
  })
});

describe('App', () => {
  test('renders App Component', async () => {
    render(<App />);

    await screen.findByText(/Signed in as/i);

    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Javascript'},
    })
    screen.debug();
  })
})

