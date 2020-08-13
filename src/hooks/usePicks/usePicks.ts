import React from 'react';
import { PICKS_INITIAL_VALUE } from '../../contexts/PicksContext/PicksContext';

export const usePicks = (): PicksContextInterface => {
  const [picks, setPicks] = React.useState<DraftPickContext>(
    PICKS_INITIAL_VALUE
  );

  const setCurrentPicks = React.useCallback(
    (currentPicks: DraftPickContext): void => {
      setPicks(currentPicks);
    },
    []
  );

  return { picks, setCurrentPicks };
};
