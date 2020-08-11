import React from 'react';
import PickIsInModal from './PickIsInModal';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickIsInModal'),
  component: PickIsInModal,
};

export const Default: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(true);
  return (
    <div
      onClick={() => console.log('click')}
      style={{ backgroundColor: 'red', padding: '2rem' }}
    >
      <h1 style={{ color: 'white' }}>Something behind</h1>
      <PickIsInModal
        visible={showModal}
        selectionNumber={42}
        ownerName="Homer"
        player={{
          position: 'QB',
          firstName: 'Ryan',
          lastName: 'Fitzpatrick',
        }}
        team={{ abbv: 'MIA', colors: { primary: 'teal', secondary: 'orange' } }}
        onDismiss={() => setShowModal(false)}
      />
    </div>
  );
};
