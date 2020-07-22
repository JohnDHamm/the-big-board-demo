import React from 'react';
import TestComponent from './TestComponent';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('TestComponent'),
  component: TestComponent,
};

export const Default = () => <TestComponent />;
