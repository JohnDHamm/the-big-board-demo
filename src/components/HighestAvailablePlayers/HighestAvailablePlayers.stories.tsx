import React from 'react';
import HighestAvailablePlayers from './HighestAvailablePlayers';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('HighestAvailablePlayers'),
  component: HighestAvailablePlayers,
};

const TEST_PLAYERS: HighestRankPlayer[] = [
  {
    name: 'John Hamm',
    position: 'WR',
    rank: 42,
    teamAbbv: 'BUF',
  },
  {
    name: 'Steve Smith',
    position: 'RB',
    rank: 45,
    teamAbbv: 'LV',
  },
  {
    name: 'Joe Namath',
    position: 'QB',
    rank: 46,
    teamAbbv: 'NYJ',
  },
];

export const Default = () => <HighestAvailablePlayers players={TEST_PLAYERS} />;
