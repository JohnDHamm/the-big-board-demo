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
  getOverallRankings,
} from '../../api';
import isEmpty from 'lodash.isempty';
import keyby from 'lodash.keyby';
import find from 'lodash.find';
import concat from 'lodash.concat';
import { calcTotalRounds } from '../../functions';
import { MobileContentContainer, ThreeUpLayout } from '../layouts';

const AppLoadingPage: React.FC = () => {
  const { setCurrentDraftPick } = React.useContext(CurrentPickContext);
  const { setCurrentDraft } = React.useContext(DraftContext);
  const { setCurrentDraftStatus } = React.useContext(DraftStatusContext);
  const { setCurrentMyTeam } = React.useContext(MyTeamContext);
  const { setCurrentPlayers } = React.useContext(PlayersContext);
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
  const [savedPlayers, setSavedPlayers] = React.useState<Player[]>([]);
  const [savedPicks, setSavedPicks] = React.useState<DraftPick[] | null>(null);
  const [savedPositionRankings, setSavedPositionRankings] = React.useState<
    SavedPositionRanking[]
  >([]);
  const [savedOverallRankings, setSavedOverallRankings] = React.useState<
    SavedOverallRanking[]
  >([]);

  const [teamsAreReady, setTeamsAreReady] = React.useState<boolean>(false);
  const [playersAreReady, setPlayersAreReady] = React.useState<boolean>(false);
  const [myTeamIsReady, setMyTeamIsReady] = React.useState<boolean>(false);
  const [picksAreReady, setPicksAreReady] = React.useState<boolean>(false);
  const [goToBoard, setGoToBoard] = React.useState<boolean>(false);

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

  // set current players and my team
  React.useEffect(() => {
    if (
      user &&
      !isEmpty(savedPlayers) &&
      !isEmpty(savedPositionRankings) &&
      !isEmpty(savedOverallRankings) &&
      savedPicks &&
      setCurrentMyTeam &&
      setCurrentPlayers
    ) {
      //  init players
      const playersInfo: PlayerInfo[] = savedPlayers.map((player) => ({
        available: true,
        positionRank: null,
        overallRank: null,
        ...player,
      }));
      const formatPlayers: PlayersContext = keyby(playersInfo, '_id');
      // update availability
      const selectedPlayers: DraftPick[] = [];
      for (let key in formatPlayers) {
        const matchPick = find(savedPicks, {
          playerId: formatPlayers[key]._id,
        });
        if (matchPick) {
          selectedPlayers.push(matchPick);
        }
      }
      selectedPlayers.forEach((player) => {
        formatPlayers[player.playerId].available = false;
      });
      // set my team
      const userPlayers = selectedPlayers.filter(
        (player) => player.ownerId === user?._id
      );
      setCurrentMyTeam(userPlayers);
      setTimeout(() => setMyTeamIsReady(true), 2000);
      // update rankings
      for (let key in formatPlayers) {
        const posRank = savedPositionRankings.filter(
          (ranking) => ranking.playerId === formatPlayers[key]._id
        );
        const overRank = savedOverallRankings.filter(
          (ranking) => ranking.playerId === formatPlayers[key]._id
        );
        if (!isEmpty(posRank)) {
          formatPlayers[key].positionRank = posRank[0].rank;
        }
        if (!isEmpty(overRank)) {
          formatPlayers[key].overallRank = overRank[0].rank;
        }
      }
      setCurrentPlayers(formatPlayers);
      setTimeout(() => {
        setPlayersAreReady(true);
      }, 1000);
    }
  }, [
    savedPlayers,
    savedPositionRankings,
    savedOverallRankings,
    savedPicks,
    user,
    setCurrentPlayers,
    setCurrentMyTeam,
  ]);

  // set current draft pick and current picks
  React.useEffect(() => {
    if (league._id.length > 0 && owners.length > 0 && savedPicks) {
      const newDraft: Draft = {
        league,
        owners,
      };
      setCurrentDraft(newDraft);
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
      const picksContext: DraftPickContext = emptyPicks;
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
      setTimeout(() => setPicksAreReady(true), 1500);
    }
  }, [
    league,
    owners,
    savedPicks,
    setCurrentDraftPick,
    setCurrentPicks,
    setCurrentDraft,
  ]);

  // get all rankings and picks
  React.useEffect(() => {
    if (league._id.length > 0) {
      const { scoringType } = league;
      getPositionRankings(scoringType)
        .then((posRanks) => {
          setSavedPositionRankings(posRanks);
        })
        .then(() => getOverallRankings(scoringType))
        .then((overRanks) => {
          setSavedOverallRankings(overRanks);
        })
        .then(() => getPicks(league._id))
        .then((leaguePicks: DraftPick[]) => {
          setSavedPicks(leaguePicks);
        })
        .catch((err) => console.log('err', err));
    }
  }, [league]);

  // get league and owners, set draft status
  React.useEffect(() => {
    if (user) {
      getLeague(user.leagueId)
        .then((userLeague: League) => {
          if (userLeague) {
            setLeague(userLeague);
            setCurrentDraftStatus(userLeague.draftStatus);
          }
        })
        .then(() => getOwners(user.leagueId))
        .then((leagueOwners: Owner[]) => {
          if (leagueOwners.length > 0) {
            setOwners(leagueOwners);
          }
        })
        .catch((err) => console.log('err', err));
    }
  }, [user, setCurrentDraftStatus]);

  // get teams and players
  React.useEffect(() => {
    getTeams()
      .then((leagueTeams: Team[]) => {
        if (!isEmpty(leagueTeams)) {
          const formatTeams: TeamsContext = keyby(leagueTeams, '_id');
          setCurrentTeams(formatTeams);
          setTimeout(() => {
            setTeamsAreReady(true);
          }, 500);
        }
      })
      .then(() => getPlayers())
      .then((leaguePlayers: Player[]) => {
        setSavedPlayers(leaguePlayers);
      })
      .catch((err) => console.log('err', err));
  }, [setCurrentTeams]);

  React.useEffect(() => {
    if (teamsAreReady && playersAreReady && picksAreReady && myTeamIsReady) {
      setTimeout(() => setGoToBoard(true), 500);
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
