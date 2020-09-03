import React from 'react';
import PicksByOwner from './PicksByOwner';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PicksByOwner'),
  component: PicksByOwner,
};

const TEST_OWNER_PICKS: OwnerPicks = {
  Homer: [
    {
      selectionNumber: 1,
      name: 'Joe Namath',
      position: 'QB',
      teamAbbv: 'NYJ',
    },
    {
      selectionNumber: 24,
      name: 'Larry Cszonka',
      position: 'RB',
      teamAbbv: 'MIA',
    },
  ],
  Jim: [
    {
      selectionNumber: 2,
      name: 'John Stallworth',
      position: 'WR',
      teamAbbv: 'PIT',
    },
    {
      selectionNumber: 23,
      name: 'Jim Brown',
      position: 'RB',
      teamAbbv: 'CLE',
    },
  ],
};

export const Default = () => (
  <div style={{ maxWidth: '400px' }}>
    <PicksByOwner ownerPicks={TEST_OWNER_PICKS} />
  </div>
);
