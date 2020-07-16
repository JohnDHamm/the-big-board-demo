import React from 'react';
import { mockPlayers } from '../../contexts/PlayersContext/PlayersContext';

export const usePlayers = (): PlayersContextInterface => {
  const [players, setPlayers] = React.useState<PlayersContext>(mockPlayers);

  const setCurrentPlayers = React.useCallback(
    (currentPlayers: PlayersContext): void => {
      setPlayers(currentPlayers);
    },
    []
  );

  return { players, setCurrentPlayers };
};
