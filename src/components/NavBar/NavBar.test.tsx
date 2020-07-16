import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render the title text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const title = getByText('The Big Board');
    expect(title).toBeInTheDocument();
  });

  it('should render the tabs', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const tabs = ['Players', 'My Team', 'More'];
    tabs.forEach((tab) => {
      const boardTab = getByText(tab);
      console.log('boardTab', boardTab);
      expect(boardTab).toBeInTheDocument();
    });
  });
});
