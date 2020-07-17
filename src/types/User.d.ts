interface Owner {
  id: string;
  name: string;
  isCommish: boolean;
}

type User = Owner | null;
