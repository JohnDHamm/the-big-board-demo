import React from 'react';
import Select from './Select';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Select'),
  component: Select,
};

const mockOptions = [
  'League one',
  'Another league',
  'A really long league name, maybe too long',
];

export const Default = () => (
  <Select
    options={mockOptions}
    onSelect={(selection) => console.log('selection', selection)}
  />
);
