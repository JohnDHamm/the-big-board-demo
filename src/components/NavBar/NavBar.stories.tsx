import React from 'react';
import NavBar from './NavBar';
import { MemoryRouter } from 'react-router-dom';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('NavBar'),
  decorators: [
    (getStory: () => React.ReactNode) => (
      <MemoryRouter initialEntries={['/app/board']}>{getStory()}</MemoryRouter>
    ),
  ],
};

export const Default = () => <NavBar />;

export const Disabled = () => <NavBar disabled={true} />;
