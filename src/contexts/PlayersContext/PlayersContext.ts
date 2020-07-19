import React from 'react';
interface Available {
  available: boolean;
}

declare global {
  type PlayerInfo = Player & Available;

  interface PlayersContext {
    [key: string]: PlayerInfo;
  }

  interface PlayersContextInterface {
    players: PlayersContext;
    setCurrentPlayers: (players: PlayersContext) => void;
  }
}

export const PLAYERS_DEFAULT_VALUE: PlayersContextInterface = {
  players: {},
  setCurrentPlayers: () => {},
};

export const PlayersContext = React.createContext<PlayersContextInterface>(
  PLAYERS_DEFAULT_VALUE
);
