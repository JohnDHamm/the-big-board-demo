import React from 'react';
import MyPlayerCard from './MyPlayerCard';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('MyPlayerCard'),
  component: MyPlayerCard,
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

export const Default = () => (
  <MyPlayerCard
    player={{ available: true, positionRank: 24, ...testPlayer }}
    team={testTeam}
    round={16}
  />
);
