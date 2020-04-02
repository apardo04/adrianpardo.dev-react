import React from 'react'
import { render } from '@testing-library/react'
import Blog from '../pages/blog.js'

test('landing on a bad page shows 404 page', () => {
    const { getByText } = render(<Blog />);
    const linkElement = getByText(/Docker Commands Cheat Sheet/i)
    expect(linkElement).toBeInTheDocument();
  })