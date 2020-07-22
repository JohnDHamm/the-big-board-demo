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
  team: Team | null;
}

const PickCard: React.FC<Props> = ({
  selectionNumber,
  ownerName,
  player,
  team,
}) => {
  return (
    <Container>
      <PickNumBlock>
        <PickNum>{selectionNumber}</PickNum>
      </PickNumBlock>
      <OwnerBlock>{ownerName}</OwnerBlock>
      {player && (
        <PlayerBlock>
          <PlayerNameBlock>
            <PlayerFirstName>{player.firstName}</PlayerFirstName>
            <PlayerLastName>
              {player.lastName}-{team && team.abbv}
            </PlayerLastName>
          </PlayerNameBlock>
          <PositionBlock>
            <Position>{player.position}</Position>
          </PositionBlock>
        </PlayerBlock>
      )}
    </Container>
  );
};

export default PickCard;
