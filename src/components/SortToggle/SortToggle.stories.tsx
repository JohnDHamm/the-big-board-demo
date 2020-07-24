import React from 'react';
import SortToggle from './SortToggle';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('SortToggle'),
  component: SortToggle,
};

export const Default = () => (
  <div style={{ width: '400px' }}>
    <SortToggle
      sortTypes={['RANK', 'A-Z', 'TEAM']}
      selectedSortType="RANK"
      onSortToggle={(newSort) => console.log('newSort', newSort)}
    />
  </div>
);
