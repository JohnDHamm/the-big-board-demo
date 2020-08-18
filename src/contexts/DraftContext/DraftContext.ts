import React from 'react';

declare global {
  interface Draft {
    league: Omit<League, 'draftStatus'>;
    owners: Owner[];
  }

  interface DraftContextInterface {
    draft: Draft;
    setCurrentDraft: (draft: Draft) => void;
  }
}

export const DRAFT_INITIAL_VALUE: Draft = {
  league: {
    _id: '',
    name: '',
    draftOrder: [],
    positionSlots: [],
    scoringType: 'non-ppr',
  },
  owners: [],
};

export const DRAFT_DEFAULT_VALUE: DraftContextInterface = {
  draft: DRAFT_INITIAL_VALUE,
  setCurrentDraft: () => {},
};

export const DraftContext = React.createContext<DraftContextInterface>(
  DRAFT_DEFAULT_VALUE
);
