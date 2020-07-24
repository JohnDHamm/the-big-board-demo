import React from 'react';
import { PageContainer, CenterContent } from './PlayersPage.styles';
import { PlayerCard, PositionToggle, SortToggle } from '../../components';
import { PlayersContext, TeamsContext } from '../../contexts';
import sortBy from 'lodash.sortby';

type Sorting = 'RANK' | 'A-Z' | 'TEAM';
const sortTypes: Sorting[] = ['RANK', 'A-Z', 'TEAM'];

const PlayersPage: React.FC = () => {
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [playersRenderList, setPlayersRenderList] = React.useState<
    PlayerInfo[]
  >([]);
  const [selectedPositions, setSelectedPositions] = React.useState<
    NFL_Position[]
  >(['TE']);
  const [sorting, setSorting] = React.useState<Sorting>('RANK');

  const renderPlayers = () => {
    return playersRenderList.map((player) => {
      return (
        <PlayerCard
          key={player.id}
          player={player}
          team={teams[player.teamId]}
          rank={player.positionRank}
        />
      );
    });
  };

  React.useEffect(() => {
    const list: PlayerInfo[] = [];
    for (let key in players) {
      selectedPositions.forEach((selPos) => {
        if (players[key].position === selPos) {
          list.push(players[key]);
        }
      });
    }
    // console.log('list', list);
    console.log('sorting', sorting);
    switch (sorting) {
      case 'A-Z':
        setPlayersRenderList(sortBy(list, ['lastName', 'firstName']));
        break;
      case 'RANK':
        setPlayersRenderList(
          sortBy(list, ['positionRank', 'lastName', 'firstName'])
        );
        break;
      case 'TEAM':
        setPlayersRenderList(sortBy(list, ['teamId', 'lastName', 'firstName']));
        break;
    }
  }, [players, selectedPositions, sorting]);

  return (
    <PageContainer>
      <CenterContent>
        <PositionToggle
          positions={['QB', 'RB', 'WR', 'TE', 'D', 'K']}
          selectedPositions={selectedPositions}
          onPositionsToggle={(newSelectedPositions) =>
            setSelectedPositions(newSelectedPositions)
          }
        />
        <SortToggle
          sortTypes={sortTypes}
          selectedSortType={sorting}
          onSortToggle={(newSort) => setSorting(newSort as Sorting)}
        />
        <div>{players && renderPlayers()}</div>
      </CenterContent>
    </PageContainer>
  );
};

export default PlayersPage;
