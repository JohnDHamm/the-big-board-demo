import React from 'react';

declare global {
  interface Draft {}

  interface PicksContextInterface {
    picks: DraftPickContext;
    setCurrentPicks: (picks: DraftPickContext) => void;
  }
}

export const PICKS_INITIAL_VALUE: DraftPickContext = {};

export const PICKS_DEFAULT_VALUE: PicksContextInterface = {
  picks: PICKS_INITIAL_VALUE,
  setCurrentPicks: () => {},
};

export const PicksContext = React.createContext<PicksContextInterface>(
  PICKS_DEFAULT_VALUE
);
