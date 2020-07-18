import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import {
  PlayersContext,
  TeamsContext,
  UserContext,
  MyTeamContext,
  DraftContext,
} from '../../contexts';
import { getLeague, getOwners } from '../../api';

const AppLoadingPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { myTeam } = React.useContext(MyTeamContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  const [league, setLeague] = React.useState<League | null>(null);
  const [owners, setOwners] = React.useState<Owner[] | null>(null);

  const initDraft = (leagueId: string) => {
    getLeague(leagueId)
      .then((usersLeague: League) => {
        if (usersLeague) {
          setLeague(usersLeague);
        }
      })
      .then(() =>
        getOwners(leagueId).then((leagueOwners: Owner[]) => {
          if (leagueOwners.length > 0) {
            setOwners(leagueOwners);
          }
        })
      );
  };

  React.useEffect(() => {
    // console.log('players', players);
    // console.log('teams', teams);
    // console.log('user', user);
    // console.log('league', league);
    console.log('owners', owners);
  }, [league, owners]);

  React.useEffect(() => {
    if (user) {
      initDraft(user.leagueId);
    }
  }, [user]);

  return (
    <div>
      <h1>preparing draft data for</h1>
      {league && <h3>{league.name}</h3>}

      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
