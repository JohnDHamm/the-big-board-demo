import React from 'react';
import PickIsInModal from './PickIsInModal';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickIsInModal'),
  component: PickIsInModal,
};

const StoryWrapper: React.FC = ({ children }) => (
  <div
    onClick={() => console.log('click')}
    style={{ backgroundColor: 'red', padding: '2rem' }}
  >
    <h1 style={{ color: 'white' }}>Something behind</h1>
    {children}
  </div>
);

export const Default = () => (
  <StoryWrapper>
    <PickIsInModal
      selectionNumber={42}
      ownerName="Homer"
      player={{
        position: 'QB',
        firstName: 'Ryan',
        lastName: 'Fitzpatrick',
      }}
      team={{ abbv: 'MIA', colors: { primary: 'teal', secondary: 'orange' } }}
      onDismiss={() => console.log('dismiss modal!')}
    />
  </StoryWrapper>
);
