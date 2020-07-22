import React from 'react';
import { PickCard } from '../../components';
import { DraftContext, PlayersContext, TeamsContext } from '../../contexts';
import { calcPickRoundNumber } from '../../functions';

const BoardPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [draftStarted, setDraftStarted] = React.useState<boolean>(false);
  const picksPerRound = draft.owners.length;
  const [currentRoundNum, setCurrentRoundNum] = React.useState<number>();

  const renderPicks = (roundNum: number): JSX.Element[] => {
    const { picks } = draft;
    const listEndNum = roundNum * picksPerRound;
    const listStartNum = listEndNum - picksPerRound + 1;
    const picksToRender: JSX.Element[] = [];
    for (let i = listStartNum; i < listEndNum + 1; i++) {
      const owner: Owner | undefined = draft.owners.find(
        (owner) => picks[i].ownerId === owner.id
      );
      const player: PlayerInfo | undefined = players[picks[i].playerId];
      picksToRender.push(
        <PickCard
          key={i}
          selectionNumber={picks[i].selectionNumber}
          ownerName={owner?.name || ''}
          player={player}
          team={player && player.teamId ? teams[player.teamId] : null}
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
    // console.log('draft', draft);
    // console.log('players', players);
    if (draft.league.draftStatus !== 'not started') {
      setDraftStarted(true);
    }
  }, [draft, players]);

  return (
    <div>
      {draftStarted ? (
        <div>
          <h3>round: {currentRoundNum}</h3>
          {currentRoundNum && renderPicks(currentRoundNum)}
        </div>
      ) : (
        <h3>DRAFT HAS NOT YET STARTED</h3>
      )}
    </div>
  );
};

export default BoardPage;
