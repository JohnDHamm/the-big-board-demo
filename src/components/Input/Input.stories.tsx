import React from 'react';
import Input from './Input';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Input'),
  component: Input,
};

export const TextInput = () => (
  <Input
    type="text"
    placeholder="text"
    onTextChange={(text) => console.log('onTextChange:', text)}
  />
);

export const PasswordInput = () => (
  <Input
    type="password"
    placeholder="password"
    onTextChange={(text) => console.log('onTextChange:', text)}
  />
);
