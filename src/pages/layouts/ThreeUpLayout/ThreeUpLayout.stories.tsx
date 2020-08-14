import React from 'react';
import ThreeUpLayout from './ThreeUpLayout';
import { NavBar, BottomTicker } from '../../../components';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'layout/ThreeUpLayout',
  component: ThreeUpLayout,
  decorators: [
    (getStory: () => React.ReactNode) => (
      <MemoryRouter initialEntries={['/app/board']}>{getStory()}</MemoryRouter>
    ),
  ],
};

const Content = () => (
  <div style={{ border: '1px solid blue', height: '1000px', width: '400px' }}>
    something else
  </div>
);

export const Default = () => (
  <div>
    <NavBar />
    <ThreeUpLayout
      left={<Content />}
      center={<Content />}
      right={<Content />}
    />
    <BottomTicker />
  </div>
);
