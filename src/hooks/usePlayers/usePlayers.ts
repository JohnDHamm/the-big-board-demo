import React from 'react';

export const usePlayers = (): PlayersContextInterface => {
  const [players, setPlayers] = React.useState<PlayersContext>({});

  const setCurrentPlayers = React.useCallback(
    (currentPlayers: PlayersContext): void => {
      setPlayers(currentPlayers);
    },
    []
  );

  return { players, setCurrentPlayers };
};
