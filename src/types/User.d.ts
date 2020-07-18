interface Owner {
  id: string;
  name: string;
  leagueId: string;
  isCommish: boolean;
}

type User = Owner | null;

interface Password {
  password: string;
}

type UserLogin = Pick<Owner, 'name' | 'leagueId'> & Password;
