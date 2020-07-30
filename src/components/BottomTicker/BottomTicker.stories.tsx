import React from 'react';
import BottomTicker from './BottomTicker';
import WelcomeUser from '../WelcomeUser/WelcomeUser';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('BottomTicker'),
  component: BottomTicker,
};

export const Default = () => (
  <div style={{ width: '100%', height: '100vh', backgroundColor: 'lightgrey' }}>
    <BottomTicker
      ownerOnClock="Richard and the girls"
      ticker={<WelcomeUser name="Gayland" />}
    />
  </div>
);
