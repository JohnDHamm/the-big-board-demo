import React from 'react';
import PickCard from './PickCard';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickCard'),
  component: PickCard,
};

const mockPlayer: PlayerInfo = {
  _id: 'JSmith-Schuster-WR',
  firstName: 'JuJu',
  lastName: 'Smith-Schuster',
  teamId: 'PIT',
  position: 'WR',
  available: false,
  positionRank: null,
  overallRank: 48,
};

const longNamePlayer: PlayerInfo = {
  _id: 'JSmith-Schuster-WR',
  firstName: 'Gregg',
  lastName: 'Something-ReallyLong',
  teamId: 'LAC',
  position: 'K',
  available: false,
  positionRank: null,
  overallRank: 48,
};

const mockTeam: Team = {
  _id: 'PIT',
  city: 'Pittsburgh',
  nickname: 'Steelers',
  abbv: 'PIT',
  colors: {
    primary: '#101820',
    secondary: '#FFB612',
  },
  byeWeek: 8,
};

export const Default = () => (
  <PickCard
    selectionNumber={7}
    ownerName="Mattecca"
    player={mockPlayer}
    team={mockTeam}
  />
);

export const LongNamesAndLatePick = () => (
  <PickCard
    selectionNumber={142}
    ownerName="Susie & the Banshees"
    player={longNamePlayer}
    team={mockTeam}
  />
);

export const NoPick = () => (
  <PickCard
    selectionNumber={43}
    ownerName="Rayne"
    player={undefined}
    team={undefined}
  />
);

//TODO example for current pick (styling)
