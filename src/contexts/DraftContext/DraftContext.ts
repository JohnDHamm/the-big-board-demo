import React from 'react';

declare global {
  interface Draft {
    league: League;
    currentPick: {
      selectionNumber: number;
      ownerId: string;
    };
    owners: Owner[];
    picks: DraftPickContext;
  }

  interface DraftContextInterface {
    draft: Draft;
    setCurrentDraft: (draft: Draft) => void;
  }
}

export const DRAFT_INITIAL_VALUE: Draft = {
  league: {
    id: '',
    name: '',
    draftOrder: [],
    draftStatus: 'closed',
    positionSlots: [],
  },
  owners: [],
  currentPick: {
    selectionNumber: 0,
    ownerId: '',
  },
  picks: {},
};

export const DRAFT_DEFAULT_VALUE: DraftContextInterface = {
  draft: DRAFT_INITIAL_VALUE,
  setCurrentDraft: () => {},
};

export const DraftContext = React.createContext<DraftContextInterface>(
  DRAFT_DEFAULT_VALUE
);
