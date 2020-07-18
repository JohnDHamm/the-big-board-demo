interface Owner {
  id: string;
  name: string;
  leagueId: string;
  isCommish: boolean;
}

type User = Owner | null;
