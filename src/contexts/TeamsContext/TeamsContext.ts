import React from 'react';

declare global {
  interface TeamsContext {
    [key: string]: Team;
  }

  interface TeamsContextInterface {
    teams: TeamsContext;
    setCurrentTeams: (teams: TeamsContext) => void;
  }
}

export const TEAMS_DEFAULT_VALUE: TeamsContextInterface = {
  teams: {},
  setCurrentTeams: () => {},
};

export const TeamsContext = React.createContext<TeamsContextInterface>(
  TEAMS_DEFAULT_VALUE
);
