interface DraftPick {
  selectionNumber: number;
  ownerId: string;
  playerId: string;
}

interface DraftPickContext {
  [key: number]: DraftPick;
}
