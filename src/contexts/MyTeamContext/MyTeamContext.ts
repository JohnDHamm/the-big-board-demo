import React from 'react';

declare global {
  interface SelectionPick {
    selectionNumber: number;
  }

  type MyPlayer = Player & SelectionPick;

  type MyTeam = MyPlayer[];

  interface MyTeamContextInterface {
    myTeam: MyTeam;
    setCurrentMyTeam: (myTeam: MyTeam) => void;
  }
}

export const mockMyTeam: MyTeam = [
  {
    id: 'JSmithSchusterPITWR',
    first_name: 'JuJu',
    last_name: 'Smith-Schuster',
    team_id: 'PIT',
    position: 'WR',
    rankings: null,
    selectionNumber: 42,
  },
  {
    id: 'RTannehillTENQB',
    first_name: 'Ryan',
    last_name: 'Tannehill',
    team_id: 'TEN',
    position: 'QB',
    rankings: null,
    selectionNumber: 30,
  },
];

export const MY_TEAM_DEFAULT_VALUE: MyTeamContextInterface = {
  myTeam: mockMyTeam,
  setCurrentMyTeam: () => {},
};

export const MyTeamContext = React.createContext<MyTeamContextInterface>(
  MY_TEAM_DEFAULT_VALUE
);
