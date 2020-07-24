import React from 'react';
interface Info {
  available: boolean;
  positionRank: number | null;
}

declare global {
  type PlayerInfo = Player & Info;

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
