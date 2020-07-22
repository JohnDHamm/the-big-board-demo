import React from 'react';
import DraftRoundTitleBar from './DraftRoundTitleBar';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('DraftRoundTitleBar'),
  component: DraftRoundTitleBar,
};

const totalRounds = 12;
const onRoundChange = (newRoundNum: number) =>
  console.log('newRoundNum', newRoundNum);

export const FirstRound = () => (
  <DraftRoundTitleBar
    roundNum={1}
    totalRounds={totalRounds}
    onRoundChange={onRoundChange}
  />
);
export const MiddleRound = () => (
  <DraftRoundTitleBar
    roundNum={6}
    totalRounds={totalRounds}
    onRoundChange={onRoundChange}
  />
);
export const LastRound = () => (
  <DraftRoundTitleBar
    roundNum={12}
    totalRounds={totalRounds}
    onRoundChange={onRoundChange}
  />
);
export const NoRoundNumber = () => (
  <DraftRoundTitleBar
    roundNum={undefined}
    totalRounds={totalRounds}
    onRoundChange={onRoundChange}
  />
);
