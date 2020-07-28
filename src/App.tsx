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
import { BottomTicker, NavBar } from './components';
import { useLocation } from 'react-router-dom';
import {
  DraftContext,
  MyTeamContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from './contexts';
import { useDraft, useMyTeam, usePlayers, useTeams, useUser } from './hooks';

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = React.useContext(UserContext);
  const { draft } = React.useContext(DraftContext);

  const getCurrentOwnerName = () => {
    const currPickOwner = draft.owners.find(
      (owner) => owner.id === draft.currentPick.ownerId
    );
    return currPickOwner ? currPickOwner.name : undefined;
  };

  return user ? (
    <div>
      <NavBar disabled={location.pathname === ROUTES.APP_LOADING} />
      <BottomTicker ownerOnClock={getCurrentOwnerName()} />
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
  const draft = useDraft();
  const myTeam = useMyTeam();
  const players = usePlayers();
  const teams = useTeams();
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <DraftContext.Provider value={draft}>
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
      </DraftContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
