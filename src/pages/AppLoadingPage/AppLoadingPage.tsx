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
import { createObjWithKeyBy } from '../../functions';
import isEmpty from 'lodash.isempty';

const AppLoadingPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { myTeam } = React.useContext(MyTeamContext);
  const { players, setCurrentPlayers } = React.useContext(PlayersContext);
  const { teams, setCurrentTeams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  const [league, setLeague] = React.useState<League | null>(null);
  const [owners, setOwners] = React.useState<Owner[] | null>(null);
  const [picks, setPicks] = React.useState<DraftPick[] | null>(null);

  const initDraft = React.useCallback(
    (leagueId: string) => {
      getLeague(leagueId)
        .then((usersLeague: League) => {
          if (usersLeague) {
            console.log('usersLeague', usersLeague);
            setLeague(usersLeague);
          }
        })
        .then(() =>
          getOwners(leagueId)
            .then((leagueOwners: Owner[]) => {
              if (leagueOwners.length > 0) {
                console.log('leagueOwners', leagueOwners);
                setOwners(leagueOwners);
              }
            })
            .then(() =>
              getTeams()
                .then((leagueTeams: Team[]) => {
                  if (!isEmpty(leagueTeams)) {
                    console.log('leagueTeams', leagueTeams);
                    setTimeout(
                      () =>
                        setCurrentTeams(createObjWithKeyBy(leagueTeams, 'id')),
                      1000
                    );
                  }
                })
                .then(() =>
                  getPlayers()
                    .then((leaguePlayers: Player[]) => {
                      if (!isEmpty(leaguePlayers)) {
                        console.log('leaguePlayers', leaguePlayers);
                        setTimeout(
                          () =>
                            setCurrentPlayers(
                              createObjWithKeyBy(leaguePlayers, 'id')
                            ),
                          3000
                        );
                      }
                    })
                    .then(() =>
                      getPicks(leagueId).then((leaguePicks: DraftPick[]) => {
                        if (!isEmpty(leaguePicks)) {
                          setTimeout(() => {
                            console.log('leaguePicks', leaguePicks);
                            const formatPicks = createObjWithKeyBy(
                              leaguePicks,
                              'selectionNumber'
                            );
                            setPicks(formatPicks as DraftPick[]);
                          }, 2000);
                        }
                      })
                    )
                )
            )
        );
    },
    [setCurrentTeams, setCurrentPlayers]
  );

  React.useEffect(() => {
    // console.log('user', user);
    // console.log('league', league);
    // console.log('owners', owners);
    // console.log('teams', teams);
    // console.log('players', players);
    console.log('picks', picks);
  }, [league, owners, picks, players, teams]);

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

      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
