import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import App from '../pages/index.js'

/*describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello World!')).not.toBeNull()
  })
})*/

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

/*describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot()
  })
})*/