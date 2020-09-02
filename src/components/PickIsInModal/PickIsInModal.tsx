import React from 'react';
import {
  CloseBtn,
  CloseContainer,
  Container,
  Content,
  FirstName,
  FirstLine,
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
import { PickIsInModalContext } from '../../contexts';
import { PICKISIN_MODAL_INITIAL_VALUE } from '../../contexts/PickIsInModalContext/PickIsInModalContext';

const PickIsInModal: React.FC<PickIsInModal> = ({
  visible,
  selectionNumber,
  ownerName,
  player,
  team,
}) => {
  const { firstName, lastName, position } = player;
  const { abbv, colors } = team;

  const { setCurrentPickIsInModal } = React.useContext(PickIsInModalContext);

  return visible ? (
    <Container onClick={(e) => e.stopPropagation()}>
      <CloseContainer>
        <CloseBtn
          onClick={() => setCurrentPickIsInModal(PICKISIN_MODAL_INITIAL_VALUE)}
        >
          <CloseIcon />
        </CloseBtn>
      </CloseContainer>
      <Title>
        <TitleText>THE PICK IS IN...</TitleText>
      </Title>
      <Content>
        <MessageBlock>
          <FirstLine>
            <MessageText>WITH THE</MessageText>
            <PickNumber>{selectionNumber}</PickNumber>
            <PickNumberOrdinal>{getOrdinal(selectionNumber)}</PickNumberOrdinal>
            <MessageText>PICK,</MessageText>
          </FirstLine>
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
  ) : null;
};

export default PickIsInModal;
