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

const TestContent: React.FC = ({ children }) => (
  <div
    style={{
      border: '1px solid blue',
      height: '1000px',
      width: '400px',
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <div>
    <NavBar />
    <ThreeUpLayout
      left={
        <TestContent>
          <p>left content</p>
        </TestContent>
      }
      center={
        <TestContent>
          <p>center content</p>
        </TestContent>
      }
      right={
        <TestContent>
          <p>right content</p>
        </TestContent>
      }
    />
    <BottomTicker />
  </div>
);
