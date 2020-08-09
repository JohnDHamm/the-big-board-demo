import React from 'react';
import Backdrop from './Backdrop';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Backdrop'),
  component: Backdrop,
};

const StoryWrapper: React.FC = ({ children }) => (
  <div
    onClick={() => console.log('click')}
    style={{ backgroundColor: 'red', padding: '2rem' }}
  >
    <h1 style={{ color: 'white' }}>Something</h1>
    {children}
  </div>
);

export const Default = () => (
  <StoryWrapper>
    <Backdrop />
  </StoryWrapper>
);

export const CustomColor = () => (
  <StoryWrapper>
    <Backdrop color="purple" />
  </StoryWrapper>
);
