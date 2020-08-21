import React from 'react';
import BottomTicker from './BottomTicker';
import WelcomeUser from '../WelcomeUser/WelcomeUser';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('BottomTicker'),
  component: BottomTicker,
};

export const UserHasCurrentPick = () => (
  <BottomTicker
    currentPick={true}
    ownerOnClock="Gayland"
    ticker={<WelcomeUser name="Gayland" />}
  />
);

export const NotCurrentUser = () => (
  <BottomTicker
    currentPick={false}
    ownerOnClock="Richard and the girls"
    ticker={<WelcomeUser name="Gayland" />}
  />
);
