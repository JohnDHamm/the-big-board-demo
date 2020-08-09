import React from 'react';
import {
  ButtonBlock,
  ButtonWrapper,
  Container,
  Logo,
  Name,
  NameBlock,
  Position,
  Title,
} from './PickConfirmModal.styles';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const PickConfirmModal: React.FC<PickConfirmModal> = ({
  visible,
  player,
  team,
  onCancel,
  onConfirm,
}) => {
  return visible ? (
    <>
      <Container color={team.colors.primary}>
        <Title>CONFIRM SELECTION:</Title>
        <NameBlock>
          <Position color={team.colors.secondary}>{player.position}</Position>
          <Name color={team.colors.secondary}>{player.name}</Name>
        </NameBlock>
        <Logo team={team.abbv} />
        <ButtonBlock>
          <ButtonWrapper>
            <div onClick={onCancel}>
              <Button label="CANCEL" alternate={true}></Button>
            </div>
          </ButtonWrapper>
          <ButtonWrapper>
            <div onClick={onConfirm}>
              <Button label="CONFIRM"></Button>
            </div>
          </ButtonWrapper>
        </ButtonBlock>
      </Container>
      <Backdrop color={team.colors.secondary} />
    </>
  ) : null;
};

export default PickConfirmModal;
