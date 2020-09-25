import React from 'react';
import { componentPathHelper } from '../../storybook';
import Logo from './Logo';

export default {
  title: componentPathHelper('Logo'),
  component: Logo,
};

export const Default = () => (
  <div style={{ width: '400px' }}>
    <Logo />
  </div>
);
