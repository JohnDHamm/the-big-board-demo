interface CurrentDraftPick {
  selectionNumber: number;
  ownerId: string;
}

interface PlayerId {
  playerId: string;
}

type DraftPick = CurrentDraftPick & PlayerId;

interface DraftPickContext {
  [key: number]: DraftPick;
}

interface LeagueId {
  leagueId: string;
}

type DraftSelection = DraftPick & LeagueId;
