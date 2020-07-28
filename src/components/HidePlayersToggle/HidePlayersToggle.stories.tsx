import React from 'react';
import HidePlayersToggle from './HidePlayersToggle';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('HidePlayersToggle'),
  component: HidePlayersToggle,
};

export const Default = () => (
  <HidePlayersToggle active={false} onToggle={() => console.log('toggled!')} />
);
