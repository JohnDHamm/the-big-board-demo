import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ROUTES } from './routes';
import {
  AppLoadingPage,
  BoardPage,
  HomePage,
  MorePage,
  MyTeamPage,
  PlayersPage,
} from './pages';
import { NavBar } from './components';
import { useLocation } from 'react-router-dom';
import {
  MyTeamContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from './contexts';
import { useMyTeam, usePlayers, useTeams, useUser } from './hooks';

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = React.useContext(UserContext);

  return user.id.length > 0 ? (
    <div>
      <NavBar disabled={location.pathname === ROUTES.APP_LOADING} />
      <Switch>
        <Route path={ROUTES.APP_LOADING} component={AppLoadingPage} />
        <Route path={ROUTES.BOARD} component={BoardPage} />
        <Route path={ROUTES.PLAYERS} component={PlayersPage} />
        <Route path={ROUTES.MY_TEAM} component={MyTeamPage} />
        <Route path={ROUTES.MORE} component={MorePage} />
      </Switch>
      <Redirect to={ROUTES.APP_LOADING} />
    </div>
  ) : (
    <Redirect to={ROUTES.HOME} />
  );
};

function App() {
  const myTeam = useMyTeam();
  const players = usePlayers();
  const teams = useTeams();
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <TeamsContext.Provider value={teams}>
        <PlayersContext.Provider value={players}>
          <MyTeamContext.Provider value={myTeam}>
            <Router>
              <Switch>
                <Route path={ROUTES.APP} component={ProtectedRoutes} />
                <Route path={ROUTES.HOME} component={HomePage} />
              </Switch>
            </Router>
          </MyTeamContext.Provider>
        </PlayersContext.Provider>
      </TeamsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
