import React from 'react';
import WelcomeUser from './WelcomeUser';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('WelcomeUser'),
  component: WelcomeUser,
};

export const Default = () => (
  <div style={{ height: '2.5rem', backgroundColor: 'black' }}>
    <WelcomeUser name="Homer" />
  </div>
);
