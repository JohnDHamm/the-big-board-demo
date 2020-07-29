import React from 'react';
import DropdownIcon from './DropdownIcon';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('DropdownIcon'),
  component: DropdownIcon,
};

const StoryWrapper: React.FC = ({ children }) => (
  <div style={{ width: '20px' }}>{children}</div>
);
export const Default = () => (
  <StoryWrapper>
    <DropdownIcon />
  </StoryWrapper>
);

export const CustomColors = () => (
  <StoryWrapper>
    <DropdownIcon fillColor="goldenrod" strokeColor="navy" />
  </StoryWrapper>
);
