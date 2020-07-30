import React from 'react';
import {
  CenterBlock,
  Container,
  NavBlock,
  NavBtn,
  NextNavIconBlock,
  Number,
  NumberContainer,
  PrevNavIconBlock,
  Title,
} from './DraftRoundTitleBar.styles';
import NavIcon from '../NavIcon/NavIcon';

interface Props {
  roundNum: number | undefined;
  totalRounds: number;
  onRoundChange: (newRoundNum: number) => void;
}
const DraftRoundTitleBar: React.FC<Props> = ({
  roundNum,
  totalRounds,
  onRoundChange,
}) => {
  const onNavRoundChange = (change: number) => {
    if (roundNum) {
      const newRoundNum = roundNum + change;
      onRoundChange(newRoundNum);
    }
  };

  return (
    <Container>
      <NavBlock>
        {roundNum && roundNum > 1 && (
          <NavBtn onClick={() => onNavRoundChange(-1)}>
            <PrevNavIconBlock>
              <NavIcon />
            </PrevNavIconBlock>
          </NavBtn>
        )}
      </NavBlock>
      <CenterBlock>
        <Title>ROUND</Title>
        <NumberContainer>
          <Number>{roundNum?.toString() || '?'}</Number>
        </NumberContainer>
      </CenterBlock>
      <NavBlock>
        {roundNum && roundNum < totalRounds && (
          <NavBtn onClick={() => onNavRoundChange(1)}>
            <NextNavIconBlock>
              <NavIcon />
            </NextNavIconBlock>
          </NavBtn>
        )}
      </NavBlock>
    </Container>
  );
};

export default DraftRoundTitleBar;
