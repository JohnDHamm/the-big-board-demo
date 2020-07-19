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
  teamId: string | null;
  position: NFL_Position;
  rankings?: NFL_Player_Ranking | null;
}
