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
      first_name: 'JuJu',
      last_name: 'Smith-Schuster',
      team_id: 'PIT',
      position: 'WR',
      rankings: null,
    },
    available: true,
  },
  RTannehillTENQB: {
    info: {
      id: 'RTannehillTENQB',
      first_name: 'Ryan',
      last_name: 'Tannehill',
      team_id: 'TEN',
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
