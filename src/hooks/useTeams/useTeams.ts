import React from 'react';
import { mockTeams } from '../../contexts/TeamsContext/TeamsContext';

export const useTeams = (): TeamsContextInterface => {
  const [teams, setTeams] = React.useState<TeamsContext>(mockTeams);

  const setCurrentTeams = React.useCallback(
    (currentTeams: TeamsContext): void => {
      setTeams(currentTeams);
    },
    []
  );

  return { teams, setCurrentTeams };
};
