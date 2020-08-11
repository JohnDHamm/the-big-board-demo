import React from 'react';
import {
  CloseBtn,
  CloseContainer,
  Container,
  Content,
  FirstName,
  FootballContainer,
  LastName,
  MessageBlock,
  MessageText,
  OwnerText,
  Pick,
  PickNumber,
  PickNumberOrdinal,
  PositionText,
  Title,
  TitleText,
} from './PickIsInModal.styles';
import CloseIcon from '../CloseIcon/CloseIcon';
import Football from '../Football/Football';
import { COLORS } from '../../styles';
import { getOrdinal } from '../../functions';

interface Props {
  selectionNumber: number;
  ownerName: string;
  player: {
    position: NFL_Position;
    firstName: string;
    lastName: string;
  };
  team: {
    abbv: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
  onDismiss: () => void;
}

const PickIsInModal: React.FC<Props> = ({
  selectionNumber,
  ownerName,
  player,
  team,
  onDismiss,
}) => {
  const { firstName, lastName, position } = player;
  const { abbv, colors } = team;

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <CloseContainer>
        <CloseBtn onClick={onDismiss}>
          <CloseIcon />
        </CloseBtn>
      </CloseContainer>
      <Content>
        <Title>
          <TitleText>THE PICK IS IN...</TitleText>
        </Title>
        <MessageBlock>
          <MessageText>WITH THE</MessageText>
          <PickNumber>{selectionNumber}</PickNumber>
          <PickNumberOrdinal>{getOrdinal(selectionNumber)}</PickNumberOrdinal>
          <MessageText>PICK,</MessageText>
          <OwnerText>{ownerName}</OwnerText>
          <MessageText>SELECTS</MessageText>
        </MessageBlock>
        <Pick team={abbv} colors={colors}>
          <FootballContainer>
            <Football
              outlineColor={COLORS.WHITE}
              fillColor={COLORS.NFL_POSITIONS[position]}
            >
              <PositionText>{position}</PositionText>
            </Football>
          </FootballContainer>
          <div>
            <FirstName>{firstName}</FirstName>
            <LastName>{lastName}</LastName>
          </div>
        </Pick>
      </Content>
    </Container>
  );
};

export default PickIsInModal;
