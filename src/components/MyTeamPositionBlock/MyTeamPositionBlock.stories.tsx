import React from 'react';
import MyTeamPositionBlock from './MyTeamPositionBlock';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('MyTeamPositionBlock'),
  component: MyTeamPositionBlock,
};

const mockPlayerInfo: PlayerInfo = {
  id: 'something',
  firstName: 'John',
  lastName: 'Hamm',
  teamId: 'TEN',
  position: 'WR',
  available: false,
  positionRank: 2,
};

const mockTeam: Team = {
  id: 'PIT',
  city: 'Pittsburgh',
  nickname: 'Steelers',
  abbv: 'PIT',
  colors: {
    primary: '#101820',
    secondary: '#FFB612',
  },
  byeWeek: 8,
};

const mockMyPlayer: MyPlayer = {
  playerInfo: mockPlayerInfo,
  roundSelectionNum: 17,
  team: mockTeam,
};

export const Default = () => (
  <MyTeamPositionBlock position="WR" totalSlots={3} players={[mockMyPlayer]} />
);
