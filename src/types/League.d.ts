interface Position_Slot {
  position: NFL_Position;
  total: number;
}

type DraftStatus = 'not started' | 'open' | 'paused' | 'done';

interface League {
  id: string;
  name: string;
  ppr?: boolean;
  positionSlots: Position_Slot[];
  draftOrder: string[];
  draftStatus: DraftStatus;
}

type LeagueListItem = Pick<League, 'id' | 'name'>;
