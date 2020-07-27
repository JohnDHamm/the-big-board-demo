type NFL_Position = 'QB' | 'RB' | 'WR' | 'TE' | 'D' | 'K';

interface NFL_Ranking {
  nonPpr: number;
  ppr: number;
}
interface NFL_Player_Ranking {
  position?: NFL_Ranking;
  overall?: NFL_Ranking;
}

interface Player {
  id: string;
  firstName: string;
  lastName: string;
  teamId: string;
  position: NFL_Position;
}

interface Info {
  available: boolean;
  positionRank: number | null;
}

type PlayerInfo = Player & Info;

interface MyPlayer {
  playerInfo: PlayerInfo;
  roundSelectionNum: number;
  team: NFL_Team;
}
