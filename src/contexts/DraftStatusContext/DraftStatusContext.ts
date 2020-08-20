import React from 'react';

declare global {
  interface DraftStatusContext {
    draftStatus: DraftStatus;
    setCurrentDraftStatus: (draftStatus: DraftStatus) => void;
  }
}

export const DRAFT_STATUS_DEFAULT_VALUE: DraftStatusContext = {
  draftStatus: 'not started',
  setCurrentDraftStatus: () => '',
};

export const DraftStatusContext = React.createContext<DraftStatusContext>(
  DRAFT_STATUS_DEFAULT_VALUE
);
