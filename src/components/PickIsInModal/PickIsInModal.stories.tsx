import React from 'react';
import PickIsInModal from './PickIsInModal';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickIsInModal'),
  component: PickIsInModal,
};

export const Default = () => (
  <div
    onClick={() => console.log('click')}
    style={{ backgroundColor: 'red', padding: '2rem' }}
  >
    <h1 style={{ color: 'white' }}>Something behind</h1>
    <PickIsInModal
      visible={true}
      selectionNumber={42}
      ownerName="Homer and the banshees"
      player={{
        position: 'WR',
        firstName: 'JuJu',
        lastName: 'Smith-Schuster',
      }}
      team={{ abbv: 'PIT', colors: { primary: 'black', secondary: 'gold' } }}
    />
  </div>
);
