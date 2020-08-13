import React from 'react';

declare global {
  interface CurrentPickContextInterface {
    currentDraftPick: CurrentDraftPick;
    setCurrentDraftPick: (pick: CurrentDraftPick) => void;
  }
}

export const CURRENT_PICK_INITIAL_VALUE: CurrentDraftPick = {
  selectionNumber: 0,
  ownerId: '',
};

export const CURRENT_PICK_DEFAULT_VALUE: CurrentPickContextInterface = {
  currentDraftPick: CURRENT_PICK_INITIAL_VALUE,
  setCurrentDraftPick: () => {},
};

export const CurrentPickContext = React.createContext<
  CurrentPickContextInterface
>(CURRENT_PICK_DEFAULT_VALUE);
