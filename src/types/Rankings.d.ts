interface SavedRankingBase {
  _id: string;
  scoringType: ScoringType;
  rank: number;
  playerId: string;
}

type SavedPositionRanking = SavedRankingBase & {
  position: NFL_Position;
};

type SavedOverallRanking = SavedRankingBase;
