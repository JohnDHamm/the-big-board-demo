import React from 'react';
import PickCard from './PickCard';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickCard'),
  component: PickCard,
};

const mockPlayer: PlayerInfo = {
  id: 'JSmith-Schuster-WR',
  firstName: 'JuJu',
  lastName: 'Smith-Schuster',
  teamId: 'PIT',
  position: 'WR',
  available: false,
};

const mockTeam: Team = {
  id: 'PIT',
  city: 'Pittsburgh',
  nickname: 'Steelers',
  abbv: 'PIT',
  logo_url: 'pit.png',
  colors: {
    primary: '#101820',
    secondary: '#FFB612',
  },
  byeWeek: 8,
};

export const Default = () => (
  <PickCard
    selectionNumber={42}
    ownerName="John"
    player={mockPlayer}
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
