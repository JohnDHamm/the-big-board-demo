import React from 'react';
import AnimFootball from './AnimFootball';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('AnimFootball'),
  component: AnimFootball,
};

export const Default = () => (
  <div style={{ width: '400px' }}>
    <AnimFootball />
  </div>
);
