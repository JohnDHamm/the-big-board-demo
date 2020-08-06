import React from 'react';
import {
  CenterContent,
  PageContainer,
  PicksContainer,
} from './BoardPage.styles';
import { DraftRoundTitleBar, PickCard } from '../../components';
import { DraftContext, PlayersContext, TeamsContext } from '../../contexts';
import { calcPickRoundNumber, calcTotalRounds } from '../../functions';

const BoardPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [draftStarted, setDraftStarted] = React.useState<boolean>(false);
  const picksPerRound = draft.owners.length;
  const totalRounds = calcTotalRounds(draft.league.positionSlots);
  const [currentRoundNum, setCurrentRoundNum] = React.useState<number>();

  const renderPicks = (roundNum: number): JSX.Element[] => {
    const { picks } = draft;
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
      calcPickRoundNumber(draft.currentPick.selectionNumber, picksPerRound)
    );
  }, [picksPerRound, draft]);

  React.useEffect(() => {
    console.log('draft', draft);
    if (draft.league.draftStatus !== 'not started') {
      setDraftStarted(true);
    }
  }, [draft, players]);

  return (
    <PageContainer>
      {draftStarted ? (
        <CenterContent>
          <DraftRoundTitleBar
            roundNum={currentRoundNum}
            totalRounds={totalRounds}
            onRoundChange={(newRoundNum) => setCurrentRoundNum(newRoundNum)}
          />
          <PicksContainer>
            {currentRoundNum && renderPicks(currentRoundNum)}
          </PicksContainer>
        </CenterContent>
      ) : (
        <h3>DRAFT HAS NOT YET STARTED</h3>
      )}
    </PageContainer>
  );
};

export default BoardPage;
