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

export const PLAYERS_DEFAULT_VALUE: PlayersContextInterface = {
  players: {},
  setCurrentPlayers: () => {},
};

export const PlayersContext = React.createContext<PlayersContextInterface>(
  PLAYERS_DEFAULT_VALUE
);
