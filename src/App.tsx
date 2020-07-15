import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  BoardPage,
  HomePage,
  MorePage,
  MyTeamPage,
  PlayersPage,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/board" component={BoardPage} />
        <Route path="/players" component={PlayersPage} />
        <Route path="/my-team" component={MyTeamPage} />
        <Route path="/more" component={MorePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
