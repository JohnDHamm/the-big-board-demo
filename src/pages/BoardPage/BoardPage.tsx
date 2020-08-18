import React from 'react';
import { PicksContainer } from './BoardPage.styles';
import { MobileContentContainer, ThreeUpLayout } from '../layouts';
import { DraftRoundTitleBar, PickCard } from '../../components';
import {
  DraftContext,
  DraftStatusContext,
  PicksContext,
  PlayersContext,
  TeamsContext,
  CurrentPickContext,
} from '../../contexts';
import { calcPickRoundNumber, calcTotalRounds } from '../../functions';

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
      left={<div>picks by position</div>}
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
          <h3>DRAFT HAS NOT YET STARTED</h3>
        )
      }
      right={<div>picks by owner</div>}
    />
  );
};

export default BoardPage;
