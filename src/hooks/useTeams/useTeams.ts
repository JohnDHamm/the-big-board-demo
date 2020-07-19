import React from 'react';

export const useTeams = (): TeamsContextInterface => {
  const [teams, setTeams] = React.useState<TeamsContext>({});

  const setCurrentTeams = React.useCallback(
    (currentTeams: TeamsContext): void => {
      setTeams(currentTeams);
    },
    []
  );

  return { teams, setCurrentTeams };
};
