import React from 'react';
import { mockMyTeam } from '../../contexts/MyTeamContext/MyTeamContext';

export const useMyTeam = (): MyTeamContextInterface => {
  const [myTeam, setMyTeam] = React.useState<MyTeam>(mockMyTeam);

  const setCurrentMyTeam = React.useCallback((currentMyTeam: MyTeam): void => {
    setMyTeam(currentMyTeam);
  }, []);

  return { myTeam, setCurrentMyTeam };
};
