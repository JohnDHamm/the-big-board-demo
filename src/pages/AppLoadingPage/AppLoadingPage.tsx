import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import {
  PlayersContext,
  TeamsContext,
  UserContext,
  MyTeamContext,
} from '../../contexts';

const AppLoadingPage: React.FC = () => {
  const { myTeam } = React.useContext(MyTeamContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    console.log('players', players);
    console.log('teams', teams);
    console.log('user', user);
    console.log('myTeam', myTeam);
  }, [myTeam, players, teams, user]);

  return (
    <div>
      <h1>loading data...</h1>
      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
