interface NFL_Team {
  id: string;
  city: string;
  nickname: string;
  abbv: string;
  colors: {
    primary: string;
    secondary: string;
  };
  byeWeek: number;
}

type Team = NFL_Team;
