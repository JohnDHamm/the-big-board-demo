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
import {
  getLeague,
  getOwners,
  getPicks,
  getPlayers,
  getTeams,
} from '../../api';
import isEmpty from 'lodash.isempty';
import keyby from 'lodash.keyby';
import find from 'lodash.find';

const AppLoadingPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { myTeam } = React.useContext(MyTeamContext);
  const { players, setCurrentPlayers } = React.useContext(PlayersContext);
  const { teams, setCurrentTeams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  const [league, setLeague] = React.useState<League | null>(null);
  const [owners, setOwners] = React.useState<Owner[] | null>(null);
  const [picks, setPicks] = React.useState<DraftPickContext>({});

  const initDraft = React.useCallback(
    (leagueId: string) => {
      getLeague(leagueId)
        .then((usersLeague: League) => {
          if (usersLeague) {
            setLeague(usersLeague);
          }
        })
        .then(() => getOwners(leagueId))
        .then((leagueOwners: Owner[]) => {
          if (leagueOwners.length > 0) {
            setOwners(leagueOwners);
          }
        })
        .then(() => getTeams())
        .then((leagueTeams: Team[]) => {
          if (!isEmpty(leagueTeams)) {
            // setTimeout(() => {
            const formatTeams: TeamsContext = keyby(leagueTeams, 'id');
            setCurrentTeams(formatTeams);
            // }, 1000);
          }
        })
        .then(() => getPicks(leagueId))
        .then((leaguePicks: DraftPick[]) => {
          if (!isEmpty(leaguePicks)) {
            // setTimeout(() => {
            const formatPicks: DraftPickContext = keyby(
              leaguePicks,
              'selectionNumber'
            );
            setPicks(formatPicks);
            // }, 3000);
          }
        })
        .then(() => getPlayers())
        .then((leaguePlayers: Player[]) => {
          if (!isEmpty(leaguePlayers)) {
            // setTimeout(() => {

            //set all players' availability to true
            const playersInfo: PlayerInfo[] = leaguePlayers.map((player) => ({
              available: true,
              ...player,
            }));

            const formatPlayers: PlayersContext = keyby(playersInfo, 'id');
            setCurrentPlayers(formatPlayers);
            // }, 2000);
          }
        })
        .catch((err) => console.log('err', err));
    },
    [setCurrentTeams, setCurrentPlayers]
  );

  const checkPlayersAvailability = React.useCallback((): void => {
    const selectedPlayers: DraftPick[] = [];
    // console.log('check avail');
    for (let key in players) {
      const matchPick = find(picks, { playerId: players[key].id });
      if (matchPick) {
        selectedPlayers.push(matchPick);
      }
    }
    // console.log('selectedPlayers', selectedPlayers);
    let updatedPlayers = players;
    selectedPlayers.forEach((player) => {
      updatedPlayers[player.playerId].available = false;
    });
    // console.log('updatedPlayers', updatedPlayers);
    setCurrentPlayers(updatedPlayers);
  }, [players, picks, setCurrentPlayers]);

  React.useEffect(() => {
    if (!isEmpty(picks) && !isEmpty(players)) {
      checkPlayersAvailability();
    }
  }, [picks, players, checkPlayersAvailability]);

  React.useEffect(() => {
    if (user) {
      initDraft(user.leagueId);
    }
  }, [user, initDraft]);

  return (
    <div>
      <h1>preparing draft data for</h1>
      {league && owners && <h3>{league.name}</h3>}
      {!isEmpty(teams) && <h3>NFL TEAMS</h3>}
      {!isEmpty(players) && <h3>NFL PLAYERS</h3>}
      {!isEmpty(picks) && <h3>League draft selections</h3>}

      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
