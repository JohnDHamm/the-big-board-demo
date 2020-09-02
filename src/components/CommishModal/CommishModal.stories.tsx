import React from 'react';
import CommishModal from './CommishModal';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('CommishModal'),
  component: CommishModal,
};

export const Default = () => (
  <div
    onClick={() => console.log('click')}
    style={{ backgroundColor: 'red', padding: '2rem' }}
  >
    <h1 style={{ color: 'white' }}>Something behind</h1>
    <CommishModal
      visible={true}
      status="The draft has now started!"
      message="Good luck to all (except Louie)."
      onActionCall={() => console.log('restart!')}
    />
  </div>
);
