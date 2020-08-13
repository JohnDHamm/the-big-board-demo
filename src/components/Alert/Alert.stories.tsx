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
    <Alert message="alert message!!!" />
  </div>
);
