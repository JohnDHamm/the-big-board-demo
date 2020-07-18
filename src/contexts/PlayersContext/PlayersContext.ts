import React from 'react';

declare global {
  interface PlayerInfo {
    info: Player;
    available: boolean;
  }
  interface PlayersContext {
    [key: string]: PlayerInfo;
  }

  interface PlayersContextInterface {
    players: PlayersContext;
    setCurrentPlayers: (players: PlayersContext) => void;
  }
}

export const mockPlayers: PlayersContext = {
  JSmithSchusterPITWR: {
    info: {
      id: 'JSmithSchusterPITWR',
      firstName: 'JuJu',
      lastName: 'Smith-Schuster',
      teamId: 'PIT',
      position: 'WR',
      rankings: null,
    },
    available: true,
  },
  RTannehillTENQB: {
    info: {
      id: 'RTannehillTENQB',
      firstName: 'Ryan',
      lastName: 'Tannehill',
      teamId: 'TEN',
      position: 'QB',
      rankings: null,
    },
    available: true,
  },
};

export const PLAYERS_DEFAULT_VALUE: PlayersContextInterface = {
  players: mockPlayers,
  setCurrentPlayers: () => {},
};

export const PlayersContext = React.createContext<PlayersContextInterface>(
  PLAYERS_DEFAULT_VALUE
);
