type NFL_Position = 'QB' | 'RB' | 'WR' | 'TE' | 'D' | 'K';

interface Player {
  _id: string;
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
