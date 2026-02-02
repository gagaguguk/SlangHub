// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SlangHub title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SlangHub/i);
    expect(titleElement).toBeInTheDocument();
});
