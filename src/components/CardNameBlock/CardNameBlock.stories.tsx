import React from 'react';
import CardNameBlock from './CardNameBlock';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('CardNameBlock'),
  component: CardNameBlock,
};

export const Default = () => (
  <div
    style={{
      width: '300px',
      height: '42px',
      padding: '0 1rem;',
      backgroundColor: 'black',
    }}
  >
    <CardNameBlock firstName="Stephen" lastName="Something-Else-Really-Long" />
  </div>
);
