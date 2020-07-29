import React from 'react';
import Button from './Button';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Button'),
  component: Button,
};

export const Default = () => <Button label="sign in" />;

export const CustonWidth = () => <Button label="sign in" width="50%" />;
