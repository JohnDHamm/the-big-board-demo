import React from 'react';
import {
  BtnBlock,
  Content,
  ContentItem,
  DescriptionBlock,
  LoadedText,
  LogoContainer,
  NarrowContent,
  Page,
  SignIn,
  StyledSpan,
  TopBlock,
} from './HomePage.styles';
import { Button, Logo, Select } from '../../components';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import {
  CurrentPickContext,
  DraftContext,
  DraftStatusContext,
  MyTeamContext,
  PicksContext,
  PlayersContext,
  TeamsContext,
  UserContext,
} from '../../contexts';
import {
  getLeague,
  getOverallRankings,
  getPicks,
  getPositionRankings,
  getOwners,
  getPlayers,
  getTeams,
} from '../../api';
import { socket } from '../../sockets/SocketListener/SocketListener';
import { calcTotalRounds } from '../../functions';
import isEmpty from 'lodash.isempty';
import keyby from 'lodash.keyby';
import concat from 'lodash.concat';
import find from 'lodash.find';
import { DEMO_LEAGUE_ID } from '../../data';
import { COLORS } from '../../styles';

type PageStatus = 'loading' | 'ready' | 'joining';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const { setCurrentDraft } = React.useContext(DraftContext);
  const { setCurrentDraftPick } = React.useContext(CurrentPickContext);
  const { setCurrentDraftStatus } = React.useContext(DraftStatusContext);
  const { setCurrentMyTeam } = React.useContext(MyTeamContext);
  const { setCurrentPicks } = React.useContext(PicksContext);
  const { setCurrentPlayers } = React.useContext(PlayersContext);
  const { setCurrentTeams } = React.useContext(TeamsContext);
  const history = useHistory();

  const [league, setLeague] = React.useState<League>({
    _id: '',
    name: '',
    draftOrder: [],
    draftStatus: 'not started',
    positionSlots: [],
    scoringType: 'non-ppr',
  });
  const [owners, setOwners] = React.useState<Owner[]>([]);
  const [savedPositionRankings, setSavedPositionRankings] = React.useState<
    SavedPositionRanking[]
  >([]);
  const [savedOverallRankings, setSavedOverallRankings] = React.useState<
    SavedOverallRanking[]
  >([]);
  const [savedPicks, setSavedPicks] = React.useState<DraftPick[] | null>(null);
  const [savedPlayers, setSavedPlayers] = React.useState<Player[]>([]);
  const [nextPickOwner, setNextPickOwner] = React.useState<Owner | null>(null);
  const [nextPickNumber, setNextPickNumber] = React.useState<number>();
  const [alternateOwner, setAlternateOwner] = React.useState<Owner>();

  const [pageStatus, setPageStatus] = React.useState<PageStatus>('loading');
  const [myTeamIsReady, setMyTeamIsReady] = React.useState<boolean>(false);
  const [picksAreReady, setPicksAreReady] = React.useState<boolean>(false);
  const [playersAreReady, setPlayersAreReady] = React.useState<boolean>(false);
  const [teamsAreReady, setTeamsAreReady] = React.useState<boolean>(false);

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

  const getSelectOptions = (): string[] => {
    const filteredOwners = owners.filter(
      (owner) => owner.name !== nextPickOwner?.name
    );
    const options: string[] = [];
    filteredOwners.forEach((owner: Owner) => {
      options.push(owner.name);
    });
    return options;
  };

  const handleSelectChange = (option: string) => {
    const owner = owners.filter((owner) => owner.name === option);
    setAlternateOwner(owner[0]);
  };

  const renderSelect = (): JSX.Element => {
    return (
      <Select
        onSelect={(option) => handleSelectChange(option)}
        options={getSelectOptions()}
      />
    );
  };

  const userLogin = (selectedOwner: Owner) => {
    setCurrentUser(selectedOwner);
    socket.emit('JoinRoom', selectedOwner.leagueId);
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
      setPageStatus('joining');
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
      setTimeout(() => setMyTeamIsReady(true), 1000);
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
      if (!isEmpty(league.draftOrder) && league.draftStatus !== 'not started') {
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
        setNextPickNumber(currentPick.selectionNumber);
        const nextOwner = find(owners, { _id: currentPick.ownerId });
        if (nextOwner) {
          setNextPickOwner(nextOwner);
        }
        setCurrentDraftPick(currentPick);
      }
      setTimeout(() => setPicksAreReady(true), 1000);
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

  // get teams and players
  React.useEffect(() => {
    getTeams()
      .then((leagueTeams: Team[]) => {
        if (!isEmpty(leagueTeams)) {
          const formatTeams: TeamsContext = keyby(leagueTeams, '_id');
          setCurrentTeams(formatTeams);
          setTimeout(() => {
            setTeamsAreReady(true);
          }, 1000);
        }
      })
      .then(() => getPlayers())
      .then((leaguePlayers: Player[]) => {
        setSavedPlayers(leaguePlayers);
      })
      .catch((err) => console.log('err', err));
  }, [setCurrentTeams]);

  // get league/draft status and owners
  React.useEffect(() => {
    getLeague(DEMO_LEAGUE_ID)
      .then((demoLeague: League) => {
        if (demoLeague) {
          setLeague(demoLeague);
          setCurrentDraftStatus(demoLeague.draftStatus);
        }
      })
      .then(() => getOwners(DEMO_LEAGUE_ID))
      .then((leagueOwners: Owner[]) => {
        if (leagueOwners.length > 0) {
          setOwners(leagueOwners);
        }
      })
      .catch((err) => console.log('err', err));
  }, [setCurrentDraftStatus]);

  React.useEffect(() => {
    if (teamsAreReady && picksAreReady) {
      setPageStatus('ready');
    }
  }, [teamsAreReady, picksAreReady]);

  React.useEffect(() => {
    if (myTeamIsReady && playersAreReady) {
      history.push(ROUTES.BOARD);
    }
  }, [myTeamIsReady, playersAreReady, history]);

  return (
    <Page>
      <TopBlock>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </TopBlock>
      <Content>
        <SignIn>DEMO</SignIn>
        <DescriptionBlock>
          Welcome to the demo for The Big Board, a fantasy football draft party
          app. This demo lets you experience the fun and excitement of draft day
          without the hassle of league fees or embarrassing trash talk!
        </DescriptionBlock>
        {pageStatus === 'loading' && (
          <LoadedText>LOADING DEMO LEAGUE DATA</LoadedText>
        )}
        {pageStatus === 'ready' && (
          <>
            <div>
              <StyledSpan color={COLORS.PRIMARY_GREEN}>
                {nextPickOwner?.name}
              </StyledSpan>
              <StyledSpan> IS ON THE CLOCK (PICK #{nextPickNumber})</StyledSpan>
            </div>
            {nextPickOwner && (
              <NarrowContent>
                <BtnBlock onClick={() => userLogin(nextPickOwner)}>
                  <Button label={`SIGN IN AS ${nextPickOwner.name}`} />
                </BtnBlock>
              </NarrowContent>
            )}
            <DescriptionBlock>
              If you’d like to experience the app as a second player to see how
              draft pick notifications work, also open this demo on another
              device or in an incognito browser window, and then sign in as a
              different player from the list below:
            </DescriptionBlock>
            <ContentItem style={{ width: '400px' }}>
              {renderSelect()}
            </ContentItem>
            {alternateOwner && (
              <BtnBlock onClick={() => userLogin(alternateOwner)}>
                <Button label={`SIGN IN AS ${alternateOwner.name}`} />
              </BtnBlock>
            )}
          </>
        )}
        {pageStatus === 'joining' && (
          <>
            <LoadedText loaded={playersAreReady}>
              JOINING THE DRAFT AS {user?.name}
            </LoadedText>
          </>
        )}
      </Content>
    </Page>
  );
};

export default HomePage;
