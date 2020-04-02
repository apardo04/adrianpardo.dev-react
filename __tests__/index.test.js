import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from '../pages/index.js'

test('lead-content is present', () => {
    render(<App />);
    const linkElement = document.getElementById("lead-content")
    expect(linkElement).toBeInTheDocument();
});

test('Show More Projects..', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Show More Projects../i));
    expect(document.getElementById("hidden-projects")).toBeInTheDocument();
});

test('Skills Click is working', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Operations/i));
    expect(document.getElementById("operations")).toBeInTheDocument();
});
