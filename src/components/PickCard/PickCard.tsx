import React from 'react';
import {
  AccentStripe,
  Container,
  OwnerBlock,
  OwnerName,
  PickNum,
  PickNumBlock,
  PlayerBlock,
  Position,
  PositionBlock,
} from './PickCard.styles';
import CardNameBlock from '../CardNameBlock/CardNameBlock';

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
  const hasPick = player !== undefined;

  return (
    <Container hasPick={hasPick}>
      <PickNumBlock hasPick={hasPick}>
        <PickNum hasPick={hasPick} isLarge={selectionNumber > 99}>
          {selectionNumber}
        </PickNum>
      </PickNumBlock>
      <OwnerBlock hasPick={hasPick}>
        <OwnerName hasPick={hasPick}>{ownerName}</OwnerName>
      </OwnerBlock>

      {player && team && (
        <>
          <AccentStripe accentColor={team.colors.secondary} />

          <PlayerBlock bgColor={team.colors.primary}>
            <CardNameBlock
              firstName={player.firstName}
              lastName={player.lastName}
            />
          </PlayerBlock>
          <PositionBlock position={player.position}>
            <Position>{player.position}</Position>
          </PositionBlock>
        </>
      )}
    </Container>
  );
};

export default PickCard;
