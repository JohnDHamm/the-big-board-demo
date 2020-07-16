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
import { PlayersContext, TeamsContext } from './contexts';
import { usePlayers, useTeams } from './hooks';

const ProtectedRoutes = () => {
  const location = useLocation();

  return (
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
  );
};

function App() {
  const players = usePlayers();
  const teams = useTeams();

  return (
    <TeamsContext.Provider value={teams}>
      <PlayersContext.Provider value={players}>
        <Router>
          <Switch>
            <Route path={ROUTES.APP} component={ProtectedRoutes} />
            <Route path={ROUTES.HOME} component={HomePage} />
          </Switch>
        </Router>
      </PlayersContext.Provider>
    </TeamsContext.Provider>
  );
}

export default App;
