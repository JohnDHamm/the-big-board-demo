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
import concat from 'lodash.concat';

const AppLoadingPage: React.FC = () => {
  const { draft, setCurrentDraft } = React.useContext(DraftContext);
  const { myTeam } = React.useContext(MyTeamContext);
  const { players, setCurrentPlayers } = React.useContext(PlayersContext);
  const { teams, setCurrentTeams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  const [league, setLeague] = React.useState<League>({
    id: '',
    name: '',
    draftOrder: [],
    draftStatus: 'closed',
    positionSlots: [],
  });
  const [owners, setOwners] = React.useState<Owner[]>([]);
  const [savedPicks, setSavedPicks] = React.useState<DraftPickContext>({});

  //TODO: move this to functions
  const createCompleteDraftOrder = (
    draftOrder: string[],
    totalPicks: number
  ): string[] => {
    const numRounds = totalPicks / draftOrder.length;
    const oddRoundOrder = draftOrder;
    const evenRoundOrder = Array.from(draftOrder).reverse();
    let completeOrder: string[] = [];

    for (let i = 1; i < numRounds + 1; i++) {
      if (i % 2 === 1) {
        completeOrder = concat(completeOrder, oddRoundOrder);
      } else {
        completeOrder = concat(completeOrder, evenRoundOrder);
      }
    }
    return completeOrder;
  };

  //TODO: move this to functions
  const initPicks = React.useCallback(
    (league: League, owners: Owner[]): DraftPickContext => {
      const numOwners = owners.length;
      const picksPerRound: number = league.positionSlots.length;
      const totalPicks = numOwners * picksPerRound;

      const completeDraftOrder: string[] = createCompleteDraftOrder(
        league.draftOrder,
        totalPicks
      );

      const emptyPick: Pick<DraftPick, 'playerId'> = {
        playerId: '',
      };
      let emptyPicks: DraftPickContext = {};
      for (let i = 1; i < totalPicks + 1; i++) {
        emptyPicks[i] = {
          selectionNumber: i,
          ownerId: completeDraftOrder[i - 1],
          ...emptyPick,
        };
      }
      return emptyPicks;
    },
    []
  );

  const createPicksContext = React.useCallback(() => {
    const picksContext: DraftPickContext = initPicks(league, owners);
    if (!isEmpty(savedPicks)) {
      for (let key in savedPicks) {
        picksContext[key] = savedPicks[key];
      }
    }
    let currentPick: CurrentDraftPick = {
      selectionNumber: 0,
      ownerId: '',
    };
    for (let i = 1; i < Object.keys(picksContext).length + 1; i++) {
      if (picksContext[i].playerId === '') {
        currentPick.selectionNumber = i;
        currentPick.ownerId = picksContext[i].ownerId;
        break;
      }
    }

    const updatedDraft = Object.assign(draft);
    updatedDraft.picks = picksContext;
    updatedDraft.currentPick = currentPick;
    setCurrentDraft(updatedDraft);
  }, [league, owners, savedPicks, initPicks, draft, setCurrentDraft]);

  const initDraft = React.useCallback(
    (leagueId: string) => {
      getLeague(leagueId)
        .then((userLeague: League) => {
          if (userLeague) {
            setLeague(userLeague);
            const updatedDraft = Object.assign(draft);
            updatedDraft.league = userLeague;
            setCurrentDraft(updatedDraft);
          }
        })
        .then(() => getOwners(leagueId))
        .then((leagueOwners: Owner[]) => {
          if (leagueOwners.length > 0) {
            setOwners(leagueOwners);
            const updatedDraft = Object.assign(draft);
            updatedDraft.owners = leagueOwners;
            setCurrentDraft(updatedDraft);
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
        .then(() => getPicks(leagueId))
        .then((leaguePicks: DraftPick[]) => {
          if (!isEmpty(leaguePicks)) {
            // setTimeout(() => {
            const formatPicks: DraftPickContext = keyby(
              leaguePicks,
              'selectionNumber'
            );
            setSavedPicks(formatPicks);
            // }, 3000);
          }
        })
        .catch((err) => console.log('err', err));
    },
    [setCurrentTeams, setCurrentPlayers, draft, setCurrentDraft]
  );

  React.useEffect(() => {
    console.log('draft', draft);
  }, [draft]);

  React.useEffect(() => {
    if (!isEmpty(league.draftOrder) && !isEmpty(owners)) {
      createPicksContext();
    }
  }, [league, owners, createPicksContext]);

  const checkPlayersAvailability = React.useCallback((): void => {
    const selectedPlayers: DraftPick[] = [];
    for (let key in players) {
      const matchPick = find(savedPicks, { playerId: players[key].id });
      if (matchPick) {
        selectedPlayers.push(matchPick);
      }
    }

    let updatedPlayers = players;
    selectedPlayers.forEach((player) => {
      updatedPlayers[player.playerId].available = false;
    });

    setCurrentPlayers(updatedPlayers);
  }, [players, savedPicks, setCurrentPlayers]);

  React.useEffect(() => {
    if (!isEmpty(savedPicks) && !isEmpty(players)) {
      checkPlayersAvailability();
    }
  }, [savedPicks, players, checkPlayersAvailability]);

  React.useEffect(() => {
    if (user) {
      initDraft(user.leagueId);
    }
  }, [user, initDraft]);

  React.useEffect(() => {
    console.log('draft', draft);
  }, [draft]);

  // React.useEffect(() => {
  // }, []);

  return (
    <div>
      <h1>preparing draft data for</h1>
      {league && owners && <h3>{league.name}</h3>}
      {!isEmpty(teams) && <h3>NFL TEAMS</h3>}
      {!isEmpty(players) && <h3>NFL PLAYERS</h3>}
      {!isEmpty(savedPicks) && <h3>League draft selections</h3>}

      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
