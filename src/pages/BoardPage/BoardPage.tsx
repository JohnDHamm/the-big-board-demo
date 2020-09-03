import React from 'react';
import {
  ContentPadding,
  NotStartedText,
  OwnerPicksContainer,
  PicksContainer,
} from './BoardPage.styles';
import { MobileContentContainer, ThreeUpLayout } from '../layouts';
import {
  DraftRoundTitleBar,
  PickCard,
  PicksByOwner,
  PicksByPosition,
} from '../../components';
import {
  DraftContext,
  DraftStatusContext,
  PicksContext,
  PlayersContext,
  TeamsContext,
  CurrentPickContext,
} from '../../contexts';
import { calcPickRoundNumber, calcTotalRounds } from '../../functions';
import isEmpty from 'lodash.isempty';
import sortBy from 'lodash.sortby';

const BoardPage: React.FC = () => {
  const { currentDraftPick } = React.useContext(CurrentPickContext);
  const { draft } = React.useContext(DraftContext);
  const { draftStatus } = React.useContext(DraftStatusContext);
  const { picks } = React.useContext(PicksContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [draftStarted, setDraftStarted] = React.useState<boolean>(false);
  const picksPerRound = draft.owners.length;
  const totalRounds = calcTotalRounds(draft.league.positionSlots);
  const [currentRoundNum, setCurrentRoundNum] = React.useState<number>();
  const [picksByPos, setPicksByPos] = React.useState<PickPosition[][]>([]);
  const [picksByOwners, setPicksByOwners] = React.useState<OwnerPicks>({});

  const renderPicks = (roundNum: number): JSX.Element[] => {
    const listEndNum = roundNum * picksPerRound;
    const listStartNum = listEndNum - picksPerRound + 1;
    const picksToRender: JSX.Element[] = [];
    for (let i = listStartNum; i < listEndNum + 1; i++) {
      const owner: Owner | undefined = draft.owners.find(
        (owner) => picks[i].ownerId === owner._id
      );
      const player: PlayerInfo | undefined = players[picks[i].playerId];
      picksToRender.push(
        <PickCard
          key={i}
          selectionNumber={picks[i].selectionNumber}
          ownerName={owner?.name || ''}
          player={player}
          team={player && player.teamId ? teams[player.teamId] : undefined}
        />
      );
    }
    return picksToRender;
  };

  React.useEffect(() => {
    if (!isEmpty(picks)) {
      const allPicksByPosition: PickPosition[][] = [];
      for (let i = 1; i < totalRounds + 1; i++) {
        const round: PickPosition[] = [];
        for (
          let j = (i - 1) * picksPerRound + 1;
          j < i * picksPerRound + 1;
          j++
        ) {
          if (picks[j].playerId !== '') {
            const pickedPlayer = players[picks[j].playerId];
            round.push(pickedPlayer.position);
          } else {
            round.push(null);
          }
        }
        allPicksByPosition.push(round);
      }
      setPicksByPos(allPicksByPosition);
    }
  }, [picks, picksPerRound, players, totalRounds]);

  React.useEffect(() => {
    if (!isEmpty(picks)) {
      const allOwnerPicks: OwnerPicks = {};
      const owners = sortBy(draft.owners, ['name']);
      owners.forEach((owner) => {
        const thisOwnerPicks: OwnerPick[] = [];
        for (let i = 1; i < Object.keys(picks).length + 1; i++) {
          if (picks[i].ownerId === owner._id && picks[i].playerId !== '') {
            const player = players[picks[i].playerId];
            thisOwnerPicks.push({
              selectionNumber: i,
              name: `${player.firstName} ${player.lastName}`,
              teamAbbv: teams[player.teamId].abbv,
              position: player.position,
            });
          }
        }
        allOwnerPicks[owner.name] = thisOwnerPicks;
      });
      setPicksByOwners(allOwnerPicks);
    }
  }, [draft, picks, players, teams]);

  React.useEffect(() => {
    setCurrentRoundNum(
      calcPickRoundNumber(currentDraftPick.selectionNumber, picksPerRound)
    );
  }, [picksPerRound, currentDraftPick]);

  React.useEffect(() => {
    // console.log('draftStatus', draftStatus);
    if (draftStatus !== 'not started') {
      setDraftStarted(true);
    }
  }, [draftStatus]);

  return (
    <ThreeUpLayout
      left={
        <ContentPadding>
          <PicksByPosition picks={picksByPos} />
        </ContentPadding>
      }
      center={
        draftStarted ? (
          <MobileContentContainer>
            <DraftRoundTitleBar
              roundNum={currentRoundNum}
              totalRounds={totalRounds}
              onRoundChange={(newRoundNum) => setCurrentRoundNum(newRoundNum)}
            />
            <PicksContainer>
              {currentRoundNum && renderPicks(currentRoundNum)}
            </PicksContainer>
          </MobileContentContainer>
        ) : (
          <NotStartedText>DRAFT HAS NOT YET STARTED</NotStartedText>
        )
      }
      right={
        <OwnerPicksContainer>
          <ContentPadding>
            <PicksByOwner ownerPicks={picksByOwners} />
          </ContentPadding>
        </OwnerPicksContainer>
      }
    />
  );
};

export default BoardPage;
