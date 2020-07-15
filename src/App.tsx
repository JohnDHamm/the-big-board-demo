import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import {
  BoardPage,
  HomePage,
  MorePage,
  MyTeamPage,
  PlayersPage,
} from './pages';
import { NavBar } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path={ROUTES.BOARD} component={BoardPage} />
        <Route path={ROUTES.PLAYERS} component={PlayersPage} />
        <Route path={ROUTES.MY_TEAM} component={MyTeamPage} />
        <Route path={ROUTES.MORE} component={MorePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
