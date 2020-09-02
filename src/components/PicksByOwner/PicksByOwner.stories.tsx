import React from 'react';
import PicksByOwner from './PicksByOwner';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PicksByOwner'),
  component: PicksByOwner,
};

export const Default = () => <PicksByOwner />;
