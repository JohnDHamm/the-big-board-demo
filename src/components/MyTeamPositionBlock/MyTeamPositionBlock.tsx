import React from 'react';
import {
  Football,
  FootballText,
  PositionBlock,
  SlotsBlock,
  Title,
  TitleBlock,
} from './MyTeamPositionBlock.styles';
import MyPlayerCard from '../MyPlayerCard/MyPlayerCard';
import EmptyCardSlot from '../EmptySlotCard/EmptySlotCard';

const NFL_POSITIONS = {
  QB: 'QUARTERBACKS',
  RB: 'RUNNING BACKS',
  WR: 'WIDE RECEIVERS',
  TE: 'TIGHT ENDS',
  D: 'DEFENSE/SPECIAL TEAMS',
  K: 'KICKERS',
};

interface Props {
  position: NFL_Position;
  totalSlots: number;
  players: MyPlayer[];
}

const MyTeamPositionBlock: React.FC<Props> = ({
  players,
  position,
  totalSlots,
}) => {
  const renderPlayers = (): JSX.Element[] => {
    let slots: JSX.Element[] = [];
    players.forEach((player) => {
      slots.push(
        <MyPlayerCard
          key={player.playerInfo.id}
          player={player.playerInfo}
          round={player.roundSelectionNum}
          team={player.team}
        />
      );
    });
    const emptySlots = totalSlots - players.length;
    for (let i = 0; i < emptySlots; i++) {
      slots.push(<EmptyCardSlot key={i} />);
    }
    return slots;
  };

  return (
    <PositionBlock position={position}>
      <TitleBlock position={position}>
        <Football>
          <FootballText>{position}</FootballText>
        </Football>
        <Title>{NFL_POSITIONS[position]}</Title>
      </TitleBlock>
      <SlotsBlock>{renderPlayers()}</SlotsBlock>
    </PositionBlock>
  );
};

export default MyTeamPositionBlock;
