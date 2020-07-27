import React from 'react';
import EmptySlotCard from './EmptySlotCard';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('EmptySlotCard'),
  component: EmptySlotCard,
};

export const Default = () => (
  <div style={{ width: '400px', padding: '2rem', backgroundColor: 'blue' }}>
    <EmptySlotCard />
  </div>
);
