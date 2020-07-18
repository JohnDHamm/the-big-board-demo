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
    ppr: false,
    positionSlots: [
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
    draftOrder: [
      'Homer-NashvilleVolleyball-1',
      'Rayne-NashvilleVolleyball-1',
      'John-NashvilleVolleyball-1',
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
      leagueId: 'NashvilleVolleyball-1',
    },
    {
      id: 'Homer-NashvilleVolleyball-1',
      name: 'Homer',
      isCommish: true,
      leagueId: 'NashvilleVolleyball-1',
    },
    {
      id: 'Rayne-NashvilleVolleyball-1',
      name: 'Rayne',
      isCommish: false,
      leagueId: 'NashvilleVolleyball-1',
    },
  ],
  status: 'open',
  picks: [],
};

export const DRAFT_DEFAULT_VALUE: DraftContextInterface = {
  draft: mockDraft,
  setCurrentDraft: () => {},
};

export const DraftContext = React.createContext<DraftContextInterface>(
  DRAFT_DEFAULT_VALUE
);
