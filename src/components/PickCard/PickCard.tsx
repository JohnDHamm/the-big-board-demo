import React from 'react';
import {
  Container,
  OwnerBlock,
  PickNum,
  PickNumBlock,
  PlayerBlock,
  PlayerNameBlock,
  PlayerFirstName,
  PlayerLastName,
  Position,
  PositionBlock,
} from './PickCard.styles';

interface Props {
  selectionNumber: number;
  ownerName: string;
  player: PlayerInfo | undefined;
  team: Team | undefined;
}

const PickCard: React.FC<Props> = ({
  selectionNumber,
  ownerName,
  player,
  team,
}) => {
  return (
    <Container hasPick={player !== undefined}>
      <PickNumBlock hasPick={player !== undefined}>
        <PickNum hasPick={player !== undefined}>{selectionNumber}</PickNum>
      </PickNumBlock>
      <OwnerBlock hasPick={player !== undefined}>{ownerName}</OwnerBlock>
      {player && team && (
        <PlayerBlock
          bgColor={team.colors.primary}
          accentColor={team.colors.secondary}
        >
          <PlayerNameBlock>
            <PlayerFirstName>{player.firstName}</PlayerFirstName>
            <PlayerLastName>{player.lastName}</PlayerLastName>
          </PlayerNameBlock>
          <PositionBlock position={player.position}>
            <Position>{player.position}</Position>
          </PositionBlock>
        </PlayerBlock>
      )}
    </Container>
  );
};

export default PickCard;
