import React from 'react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'NavBar',
  decorators: [
    (getStory: () => React.ReactNode) => (
      <MemoryRouter>{getStory()}</MemoryRouter>
    ),
  ],
};

export const Default = () => <NavBar />;
