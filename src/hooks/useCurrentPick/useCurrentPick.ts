import React from 'react';
import { CURRENT_PICK_INITIAL_VALUE } from '../../contexts/CurrentPickContext/CurrentPickContext';

export const useCurrentPick = (): CurrentPickContextInterface => {
  const [currentDraftPick, setCurrentPick] = React.useState<CurrentDraftPick>(
    CURRENT_PICK_INITIAL_VALUE
  );

  const setCurrentDraftPick = React.useCallback(
    (currentPick: CurrentDraftPick): void => {
      setCurrentPick(currentPick);
    },
    []
  );

  return { currentDraftPick, setCurrentDraftPick };
};
