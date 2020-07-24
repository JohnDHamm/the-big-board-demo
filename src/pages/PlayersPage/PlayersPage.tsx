import React from 'react';
import { PageContainer, CenterContent } from './PlayersPage.styles';
import { PlayerCard, PositionToggle } from '../../components';
import { PlayersContext, TeamsContext } from '../../contexts';
import sortBy from 'lodash.sortby';

type Sorting = 'alpha' | 'rank' | 'team';

const PlayersPage: React.FC = () => {
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [playersRenderList, setPlayersRenderList] = React.useState<
    PlayerInfo[]
  >([]);
  const [selectedPositions, setSelectedPositions] = React.useState<
    NFL_Position[]
  >(['TE']);
  const [sorting, setSorting] = React.useState<Sorting>('team');

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
      case 'alpha':
        setPlayersRenderList(sortBy(list, ['lastName', 'firstName']));
        break;
      case 'rank':
        setPlayersRenderList(
          sortBy(list, ['positionRank', 'lastName', 'firstName'])
        );
        break;
      case 'team':
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
        <div>{players && renderPlayers()}</div>
      </CenterContent>
    </PageContainer>
  );
};

export default PlayersPage;
