import React from 'react';
import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

test('renders learn react link', () => {
  const { getByText } = render(<TestComponent />);
  const linkElement = getByText(/test component/i);
  expect(linkElement).toBeInTheDocument();
});
