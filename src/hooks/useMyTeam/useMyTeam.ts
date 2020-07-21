import React from 'react';

export const useMyTeam = (): MyTeamContextInterface => {
  const [myTeam, setMyTeam] = React.useState<MyTeam>([]);

  const setCurrentMyTeam = React.useCallback((currentMyTeam: MyTeam): void => {
    setMyTeam(currentMyTeam);
  }, []);

  return { myTeam, setCurrentMyTeam };
};
