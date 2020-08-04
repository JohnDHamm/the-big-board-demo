import React from 'react';
import PlayerCard from './PlayerCard';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PlayerCard'),
  component: PlayerCard,
};

const testPlayer: Player = {
  id: 'something',
  firstName: 'John',
  lastName: 'Hamm',
  teamId: 'TEN',
  position: 'WR',
};

const testTeam: Team = {
  id: 'TEN',
  city: 'Tennessee',
  nickname: 'Titans',
  abbv: 'TEN',
  colors: {
    primary: '#0C2340',
    secondary: '#4B92DB',
  },
  byeWeek: 10,
};

export const Available = () => (
  <PlayerCard
    player={{ available: true, positionRank: 24, ...testPlayer }}
    team={testTeam}
    rank={24}
  />
);

export const NotAvailable = () => (
  <PlayerCard
    player={{ available: false, positionRank: null, ...testPlayer }}
    team={testTeam}
    rank={null}
  />
);
