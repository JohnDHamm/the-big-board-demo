import React from 'react';
import PicksByPosition from './PicksByPosition';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PicksByPosition'),
  component: PicksByPosition,
};

const TEST_PICKS: PickPosition[][] = [
  ['RB', 'RB', 'RB', 'RB', 'QB', 'RB', 'RB', 'RB', 'WR', 'RB', 'QB', 'RB'],
  ['WR', 'QB', 'RB', 'RB', 'TE', 'WR', 'QB', 'RB', 'WR', 'TE', 'QB', 'RB'],
  ['QB', 'QB', 'RB', 'TE', 'D', 'K', null, null, null, null, null, null],
];

export const Default = () => <PicksByPosition picks={TEST_PICKS} />;
