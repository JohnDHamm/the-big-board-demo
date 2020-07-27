import React from 'react';
import { Page } from './MyTeamPage.styles';
import { MyTeamPositionBlock } from '../../components';
import {
  MyTeamContext,
  DraftContext,
  TeamsContext,
  PlayersContext,
} from '../../contexts';
import { calcPickRoundNumber } from '../../functions';

const positions: NFL_Position[] = ['QB', 'RB', 'WR', 'TE', 'D', 'K'];

const MyTeamPage: React.FC = () => {
  const { myTeam } = React.useContext(MyTeamContext);
  const { draft } = React.useContext(DraftContext);
  const { teams } = React.useContext(TeamsContext);
  const { players } = React.useContext(PlayersContext);

  const renderBlocks = (): JSX.Element[] => {
    let blocks: JSX.Element[] = [];
    positions.forEach((position) => {
      const positionSlots = draft.league.positionSlots.filter(
        (slot) => slot.position === position
      );
      const totalSlots = positionSlots[0].total;
      let myPlayers: MyPlayer[] = [];
      myTeam.forEach((player) => {
        if (players[player.playerId].position === position) {
          const newPlayer: MyPlayer = {
            playerInfo: players[player.playerId],
            roundSelectionNum: calcPickRoundNumber(
              player.selectionNumber,
              draft.owners.length
            ),
            team: teams[players[player.playerId].teamId],
          };
          myPlayers.push(newPlayer);
        }
      });
      blocks.push(
        <MyTeamPositionBlock
          key={position}
          position={position}
          totalSlots={totalSlots}
          players={myPlayers}
        />
      );
    });
    return blocks;
  };

  return <Page>{renderBlocks()}</Page>;
};

export default MyTeamPage;
