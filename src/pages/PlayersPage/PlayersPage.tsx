import React from 'react';
import { PageContainer, CenterContent } from './PlayersPage.styles';
import { PlayerCard } from '../../components';
import { PlayersContext, TeamsContext } from '../../contexts';
import sortBy from 'lodash.sortby';

const PlayersPage: React.FC = () => {
  const { players } = React.useContext(PlayersContext);
  const { teams } = React.useContext(TeamsContext);

  const [playersRenderList, setPlayersRenderList] = React.useState<
    PlayerInfo[]
  >([]);
  const [positionToggle, setPositionToggle] = React.useState<NFL_Position>(
    'RB'
  );

  const renderPlayers = () => {
    return playersRenderList.map((player) => {
      return (
        <PlayerCard
          key={player.id}
          player={player}
          team={teams[player.teamId]}
          rank={null}
        />
      );
    });
  };

  React.useEffect(() => {
    console.log('players', players);
    const list: PlayerInfo[] = [];
    for (let key in players) {
      // if (players[key].position === positionToggle) {
      list.push(players[key]);
      // }
    }
    setPlayersRenderList(sortBy(list, ['lastName']));
  }, [players, positionToggle]);

  return (
    <PageContainer>
      <CenterContent>
        <h1>position: {positionToggle}</h1>
        <div>{players && renderPlayers()}</div>
      </CenterContent>
    </PageContainer>
  );
};

export default PlayersPage;
