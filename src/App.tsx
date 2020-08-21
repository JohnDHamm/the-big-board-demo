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
import {
  Alert,
  BottomTicker,
  NavBar,
  PickConfirmModal,
  PickIsInModal,
  WelcomeUser,
} from './components';
import SocketListener from './sockets/SocketListener/SocketListener';
import { useLocation } from 'react-router-dom';
import {
  AlertContext,
  CurrentPickContext,
  DraftContext,
  DraftStatusContext,
  MyTeamContext,
  PickConfirmModalContext,
  PickIsInModalContext,
  PicksContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from './contexts';
import {
  useAlert,
  useCurrentPick,
  useDraft,
  useDraftStatus,
  useMyTeam,
  usePickConfirmModal,
  usePickIsInModal,
  usePlayers,
  usePicks,
  useTeams,
  useUser,
} from './hooks';

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user } = React.useContext(UserContext);
  const { currentDraftPick } = React.useContext(CurrentPickContext);
  const { draft } = React.useContext(DraftContext);
  const { modal } = React.useContext(PickConfirmModalContext);
  const { pickIsInModal } = React.useContext(PickIsInModalContext);
  const { alert } = React.useContext(AlertContext);

  const getCurrentOwnerName = () => {
    const currPickOwner = draft.owners.find(
      (owner) => owner._id === currentDraftPick.ownerId
    );
    return currPickOwner ? currPickOwner.name : undefined;
  };

  return user ? (
    <div>
      {alert && (
        <Alert
          message={alert?.message}
          type={alert?.type}
          sticky={alert?.sticky}
        />
      )}
      <PickConfirmModal {...modal} />
      <PickIsInModal {...pickIsInModal} />
      <NavBar disabled={location.pathname === ROUTES.APP_LOADING} />
      <BottomTicker
        currentPick={user.name === getCurrentOwnerName()}
        ownerOnClock={getCurrentOwnerName()}
        ticker={<WelcomeUser name={user.name} />}
      />
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
  const alert = useAlert();
  const currentPick = useCurrentPick();
  const draft = useDraft();
  const draftStatus = useDraftStatus();
  const myTeam = useMyTeam();
  const modal = usePickConfirmModal();
  const pickIsInModal = usePickIsInModal();
  const players = usePlayers();
  const picks = usePicks();
  const teams = useTeams();
  const user = useUser();

  return (
    <UserContext.Provider value={user}>
      <AlertContext.Provider value={alert}>
        <CurrentPickContext.Provider value={currentPick}>
          <DraftContext.Provider value={draft}>
            <DraftStatusContext.Provider value={draftStatus}>
              <TeamsContext.Provider value={teams}>
                <PlayersContext.Provider value={players}>
                  <PicksContext.Provider value={picks}>
                    <MyTeamContext.Provider value={myTeam}>
                      <PickConfirmModalContext.Provider value={modal}>
                        <PickIsInModalContext.Provider value={pickIsInModal}>
                          <SocketListener>
                            <Router>
                              <Switch>
                                <Route
                                  path={ROUTES.APP}
                                  component={ProtectedRoutes}
                                />
                                <Route
                                  path={ROUTES.HOME}
                                  component={HomePage}
                                />
                              </Switch>
                            </Router>
                          </SocketListener>
                        </PickIsInModalContext.Provider>
                      </PickConfirmModalContext.Provider>
                    </MyTeamContext.Provider>
                  </PicksContext.Provider>
                </PlayersContext.Provider>
              </TeamsContext.Provider>
            </DraftStatusContext.Provider>
          </DraftContext.Provider>
        </CurrentPickContext.Provider>
      </AlertContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
