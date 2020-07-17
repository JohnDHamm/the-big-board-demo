import React from 'react';

declare global {
  interface Draft {
    league: League;
    currentPick: {
      selectionNumber: number;
      ownerId: string;
    };
    owners: User[];
    status: 'closed' | 'open' | 'paused' | 'done';
    draftOrder: string[];
    picks: DraftPick[];
  }

  interface DraftContextInterface {
    draft: Draft;
    setCurrentDraft: (draft: Draft) => void;
  }
}

export const mockDraft: Draft = {
  league: {
    id: 'NashvilleVolleyball-1',
    name: 'Nashville Volleyball',
    commish_ids: ['John-NashvilleVolleyball-1', 'Homer-NashvilleVolleyball-1'],
    ppr: false,
    position_slots: [
      {
        position: 'QB',
        total: 2,
      },
      {
        position: 'RB',
        total: 4,
      },
      {
        position: 'WR',
        total: 4,
      },
      {
        position: 'TE',
        total: 2,
      },
      {
        position: 'D',
        total: 2,
      },
      {
        position: 'K',
        total: 2,
      },
    ],
  },
  currentPick: {
    selectionNumber: 7,
    ownerId: 'John-NashvilleVolleyball-1',
  },
  owners: [
    {
      id: 'John-NashvilleVolleyball-1',
      name: 'John',
      isCommish: true,
    },
    {
      id: 'Homer-NashvilleVolleyball-1',
      name: 'Homer',
      isCommish: true,
    },
    {
      id: 'Rayne-NashvilleVolleyball-1',
      name: 'Rayne',
      isCommish: false,
    },
  ],
  status: 'open',
  picks: [],
  draftOrder: [
    'Homer-NashvilleVolleyball-1',
    'Rayne-NashvilleVolleyball-1',
    'John-NashvilleVolleyball-1',
  ],
};

export const DRAFT_DEFAULT_VALUE: DraftContextInterface = {
  draft: mockDraft,
  setCurrentDraft: () => {},
};

export const DraftContext = React.createContext<DraftContextInterface>(
  DRAFT_DEFAULT_VALUE
);
