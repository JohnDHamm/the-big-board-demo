interface Position_Slot {
  position: NFL_Position;
  total: number;
}

interface League {
  id: string;
  name: string;
  commish_ids: string[];
  ppr?: boolean;
  position_slots: Position_Slot[];
}
