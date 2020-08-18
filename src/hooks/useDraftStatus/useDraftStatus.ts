import React from 'react';

export const useDraftStatus = (): DraftStatusContext => {
  const [draftStatus, setDraftStatus] = React.useState<DraftStatus>(
    'not started'
  );

  const setCurrentDraftStatus = React.useCallback(
    (currentDraftStatus: DraftStatus): void => {
      setDraftStatus(currentDraftStatus);
    },
    []
  );

  return { draftStatus, setCurrentDraftStatus };
};
