type NFL_Position = 'QB' | 'RB' | 'WR' | 'TE' | 'D' | 'K';

interface NFL_Ranking {
  non_ppr: number;
  ppr: number;
}
interface NFL_Player_Ranking {
  position?: NFL_Ranking;
  overall?: NFL_Ranking;
}

interface Player {
  id: string;
  first_name: string;
  last_name: string;
  team_id: string | null;
  position: NFL_Position;
  rankings?: NFL_Player_Ranking | null;
}
