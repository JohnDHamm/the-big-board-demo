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

export const mockTeams: TeamsContext = {
  PIT: {
    id: 'PIT',
    city: 'Pittsburgh',
    nickname: 'Steelers',
    abbv: 'PIT',
    logo_url: 'http://aws.s3.bucket/pit.png',
    colors: {
      primary: '#101820',
      secondary: '#FFB612',
    },
    byeWeek: 8,
  },
  TEN: {
    id: 'TEN',
    city: 'Tennessee',
    nickname: 'Titans',
    abbv: 'TEN',
    logo_url: 'http://aws.s3.bucket/ten.png',
    colors: {
      primary: '#0C2340',
      secondary: '#4B92DB',
    },
    byeWeek: 7,
  },
};

export const TEAMS_DEFAULT_VALUE: TeamsContextInterface = {
  teams: mockTeams,
  setCurrentTeams: () => {},
};

export const TeamsContext = React.createContext<TeamsContextInterface>(
  TEAMS_DEFAULT_VALUE
);
