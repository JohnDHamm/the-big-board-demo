import React from 'react';
import PickConfirmModal from './PickConfirmModal';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('PickConfirmModal'),
  component: PickConfirmModal,
};

export const Default = () => (
  <PickConfirmModal
    visible={true}
    team={{ colors: { primary: '#00338D', secondary: '#C60C30' }, abbv: 'BUF' }}
    player={{ position: 'WR', name: 'Frank Lewis' }}
    onCancel={() => console.log('cancel pick')}
    onConfirm={() => console.log('pick confirmed')}
  />
);
