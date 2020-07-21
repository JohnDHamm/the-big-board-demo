import React from 'react';

declare global {
  interface MyPlayer {
    playerId: string;
    selectionNumber: number;
  }

  type MyTeam = MyPlayer[];

  interface MyTeamContextInterface {
    myTeam: MyTeam;
    setCurrentMyTeam: (myTeam: MyTeam) => void;
  }
}

export const MY_TEAM_DEFAULT_VALUE: MyTeamContextInterface = {
  myTeam: [],
  setCurrentMyTeam: () => {},
};

export const MyTeamContext = React.createContext<MyTeamContextInterface>(
  MY_TEAM_DEFAULT_VALUE
);
