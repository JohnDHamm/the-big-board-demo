import React from 'react';
import MyDraftNeeds from './MyDraftNeeds';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('MyDraftNeeds'),
  component: MyDraftNeeds,
};

const TEST_NEEDS = {
  QB: 1,
  RB: 2,
  WR: 3,
  TE: 2,
  D: 2,
  K: 2,
};
export const Default = () => <MyDraftNeeds myPositionNeeds={TEST_NEEDS} />;
