import React from 'react';
import {
  Container,
  LoadBlock,
  LoadedText,
  Text,
} from './AppLoadingPage.styles';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';
import {
  CurrentPickContext,
  PlayersContext,
  PicksContext,
  TeamsContext,
  UserContext,
  MyTeamContext,
  DraftContext,
  DraftStatusContext,
} from '../../contexts';
import {
  getLeague,
  getOwners,
  getPicks,
  getPlayers,
  getPositionRankings,
  getTeams,
} from '../../api';
import isEmpty from 'lodash.isempty';
import keyby from 'lodash.keyby';
import find from 'lodash.find';
import concat from 'lodash.concat';
import { calcTotalRounds } from '../../functions';
import { MobileContentContainer, ThreeUpLayout } from '../layouts';

interface SavedRanking {
  _id: string;
  position: NFL_Position;
  scoringType: ScoringType;
  rank: number;
  playerId: string;
}

const AppLoadingPage: React.FC = () => {
  const { setCurrentDraftPick } = React.useContext(CurrentPickContext);
  const { draft, setCurrentDraft } = React.useContext(DraftContext);
  const { setCurrentDraftStatus } = React.useContext(DraftStatusContext);
  const { setCurrentMyTeam } = React.useContext(MyTeamContext);
  const { players, setCurrentPlayers } = React.useContext(PlayersContext);
  const { setCurrentPicks } = React.useContext(PicksContext);
  const { setCurrentTeams } = React.useContext(TeamsContext);
  const { user } = React.useContext(UserContext);

  const [league, setLeague] = React.useState<League>({
    _id: '',
    name: '',
    draftOrder: [],
    draftStatus: 'not started',
    positionSlots: [],
    scoringType: 'non-ppr',
  });
  const [owners, setOwners] = React.useState<Owner[]>([]);
  const [savedPicks, setSavedPicks] = React.useState<DraftPick[] | null>(null);
  const [savedPositionRankings, setSavedPositionRankings] = React.useState<
    SavedRanking[]
  >([]);

  const [teamsAreReady, setTeamsAreReady] = React.useState<boolean>(false);
  const [playersAreReady, setPlayersAreReady] = React.useState<boolean>(false);
  const [myTeamIsReady, setMyTeamIsReady] = React.useState<boolean>(false);
  const [picksAreReady, setPicksAreReady] = React.useState<boolean>(false);
  const [goToBoard, setGoToBoard] = React.useState<boolean>(false);

  // TODO: move this to functions
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

  // TODO: move this to functions
  const initPicks = React.useCallback(
    (league: League, owners: Owner[]): DraftPickContext => {
      const numOwners = owners.length;
      const numRounds = calcTotalRounds(league.positionSlots);
      const totalPicks = numRounds * numOwners;

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
    const savedPicksContext: DraftPickContext = keyby(
      savedPicks,
      'selectionNumber'
    );
    if (!isEmpty(savedPicksContext)) {
      for (let key in savedPicksContext) {
        picksContext[key] = savedPicksContext[key];
      }
    }
    let currentPick: CurrentDraftPick = {
      selectionNumber: 1,
      ownerId: '',
    };
    for (let i = 1; i < Object.keys(picksContext).length + 1; i++) {
      if (picksContext[i].playerId === '') {
        currentPick.selectionNumber = i;
        currentPick.ownerId = picksContext[i].ownerId;
        break;
      }
    }
    setCurrentPicks(picksContext);
    setCurrentDraftPick(currentPick);
    setTimeout(() => setPicksAreReady(true), 300);
  }, [
    league,
    owners,
    savedPicks,
    initPicks,
    setCurrentDraftPick,
    setCurrentPicks,
  ]);

  const initDraft = React.useCallback(
    (leagueId: string) => {
      getLeague(leagueId)
        .then((userLeague: League) => {
          if (userLeague) {
            // console.log('userLeague', userLeague);
            setLeague(userLeague);
            setCurrentDraftStatus(userLeague.draftStatus);
            const updatedDraft = Object.assign(draft);
            updatedDraft.league = userLeague;
            setCurrentDraft(updatedDraft);
          }
        })
        .then(() => getOwners(leagueId))
        .then((leagueOwners: Owner[]) => {
          if (leagueOwners.length > 0) {
            // console.log('leagueOwners', leagueOwners);
            setOwners(leagueOwners);
            const updatedDraft = Object.assign(draft);
            updatedDraft.owners = leagueOwners;
            setCurrentDraft(updatedDraft);
          }
        })
        .then(() => getTeams())
        .then((leagueTeams: Team[]) => {
          if (!isEmpty(leagueTeams)) {
            // console.log('leagueTeams', leagueTeams);
            const formatTeams: TeamsContext = keyby(leagueTeams, '_id');
            setCurrentTeams(formatTeams);
            setTimeout(() => {
              setTeamsAreReady(true);
            }, 100);
          }
        })
        .then(() => getPlayers())
        .then((leaguePlayers: Player[]) => {
          if (!isEmpty(leaguePlayers)) {
            // console.log('leaguePlayers', leaguePlayers);
            const playersInfo: PlayerInfo[] = leaguePlayers.map((player) => ({
              available: true,
              positionRank: null,
              ...player,
            }));

            const formatPlayers: PlayersContext = keyby(playersInfo, '_id');
            setCurrentPlayers(formatPlayers);
            setTimeout(() => {
              setPlayersAreReady(true);
            }, 200);
          }
        })
        .catch((err) => console.log('err', err));
    },
    [
      setCurrentTeams,
      setCurrentPlayers,
      draft,
      setCurrentDraft,
      setCurrentDraftStatus,
    ]
  );

  const checkPlayersAvailability = React.useCallback((): void => {
    const selectedPlayers: DraftPick[] = [];
    for (let key in players) {
      const matchPick = find(savedPicks, { playerId: players[key]._id });
      if (matchPick) {
        selectedPlayers.push(matchPick);
      }
    }

    let updatedPlayers = Object.assign(players);
    selectedPlayers.forEach((player) => {
      updatedPlayers[player.playerId].available = false;
    });
    setCurrentPlayers(updatedPlayers);

    const userPlayers = selectedPlayers.filter(
      (player) => player.ownerId === user?._id
    );
    setCurrentMyTeam(userPlayers);
    setTimeout(() => setMyTeamIsReady(true), 400);
  }, [players, savedPicks, setCurrentMyTeam, setCurrentPlayers, user]);

  const getLeaguePicks = (leagueId: string) => {
    getPicks(leagueId)
      .then((leaguePicks: DraftPick[]) => {
        setSavedPicks(leaguePicks);
      })
      .catch((err) => console.log('err', err));
  };

  React.useEffect(() => {
    // console.log('user', user);
    if (user && user.leagueId !== '') {
    }
    if (user) {
      initDraft(user.leagueId);
    }
  }, [user, initDraft]);

  React.useEffect(() => {
    if (savedPicks && !isEmpty(players)) {
      checkPlayersAvailability();
    }
  }, [savedPicks, players, checkPlayersAvailability]);

  React.useEffect(() => {
    if (!isEmpty(league.draftOrder) && !isEmpty(owners)) {
      createPicksContext();
    }
  }, [league, owners, createPicksContext]);

  React.useEffect(() => {
    // console.log('league', league);
    if (league._id !== '') {
      if (league.draftStatus !== 'not started') {
        getLeaguePicks(league._id);
        getPositionRankings(league.scoringType).then((rankings) => {
          // console.log('rankings', rankings);
          if (!isEmpty(rankings)) {
            setSavedPositionRankings(rankings);
          }
        });
      } else {
        setTimeout(() => {
          setPicksAreReady(true);
          setMyTeamIsReady(true);
        }, 300);
      }
    }
  }, [league]);

  React.useEffect(() => {
    // console.log('ranking...');
    const updatePlayers: PlayersContext = Object.assign(players);
    for (let key in players) {
      const rank = savedPositionRankings.filter(
        (ranking) => ranking.playerId === players[key]._id
      );
      if (!isEmpty(rank)) {
        updatePlayers[key].positionRank = rank[0].rank;
      }
    }
  }, [players, savedPositionRankings]);

  React.useEffect(() => {
    if (teamsAreReady && playersAreReady && picksAreReady && myTeamIsReady) {
      setTimeout(() => setGoToBoard(true), 150);
    }
  }, [myTeamIsReady, playersAreReady, teamsAreReady, picksAreReady]);

  return (
    <ThreeUpLayout
      left={<div></div>}
      center={
        <MobileContentContainer>
          <Container>
            <Text>preparing draft data for</Text>
            <LoadedText loaded={true}>{league.name}</LoadedText>
            <LoadBlock>
              <LoadedText loaded={teamsAreReady}>NFL TEAMS</LoadedText>
              <LoadedText loaded={playersAreReady}>NFL PLAYERS</LoadedText>
              <LoadedText loaded={picksAreReady}>
                DRAFT SETTINGS AND PICKS
              </LoadedText>
              <LoadedText loaded={myTeamIsReady}>YOUR TEAM ROSTER</LoadedText>
            </LoadBlock>
            {goToBoard && <Redirect to={ROUTES.BOARD} />}
          </Container>
        </MobileContentContainer>
      }
      right={<div></div>}
    />
  );
};

export default AppLoadingPage;
