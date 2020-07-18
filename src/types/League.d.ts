interface Position_Slot {
  position: NFL_Position;
  total: number;
}

interface League {
  id: string;
  name: string;
  ppr?: boolean;
  positionSlots: Position_Slot[];
  draftOrder: string[];
}

type LeagueListItem = Pick<League, 'id', 'name'>;
