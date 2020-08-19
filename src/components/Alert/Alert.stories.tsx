import React from 'react';
import Alert from './Alert';
import BottomTicker from '../BottomTicker/BottomTicker';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Alert'),
  component: Alert,
};

export const Default = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'lightgrey',
    }}
  >
    <BottomTicker />
    <Alert message="Congrats! Your pick is complete." type="success" />
  </div>
);
export const Sticky = () => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'lightgrey',
    }}
  >
    <BottomTicker />
    <Alert message="The draft has been paused." sticky={true} type="err" />
  </div>
);
