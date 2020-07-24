import React from 'react';
import PositionToggle from './PositionToggle';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PositionToggle'),
  component: PositionToggle,
};

const positions: NFL_Position[] = ['QB', 'RB', 'WR', 'TE', 'D', 'K'];

export const Default = () => (
  <div style={{ width: '400px' }}>
    <PositionToggle
      positions={positions}
      selectedPositions={['RB', 'K']}
      onPositionsToggle={(newPositions) =>
        console.log('newPositions', newPositions)
      }
    />
  </div>
);
