// Counter.test.js

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counting from '../container/counting'

test('increments and decrements the counter', () => {
  const { getByText, getByTestId } = render(<Counting />)

  // Initial count should be 0
  const countElement = getByText(/Count:/i)
  expect(countElement).toHaveTextContent('Count: 0')

  // Click the increment button
  const incrementButton = getByText(/Increment/i)
  fireEvent.click(incrementButton)

  // Count should be 1 after incrementing
  expect(countElement).toHaveTextContent('Count: 1')

  // Click the decrement button
  const decrementButton = getByText(/Decrement/i)
  fireEvent.click(decrementButton)

  // Count should be 0 after decrementing
  expect(countElement).toHaveTextContent('Count: 0')
})
