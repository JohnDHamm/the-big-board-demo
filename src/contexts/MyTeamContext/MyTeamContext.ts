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
    firstName: 'JuJu',
    lastName: 'Smith-Schuster',
    teamId: 'PIT',
    position: 'WR',
    rankings: null,
    selectionNumber: 42,
  },
  {
    id: 'RTannehillTENQB',
    firstName: 'Ryan',
    lastName: 'Tannehill',
    teamId: 'TEN',
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
