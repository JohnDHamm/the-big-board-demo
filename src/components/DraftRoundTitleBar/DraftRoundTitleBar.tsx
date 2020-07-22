import React from 'react';
import {
  CenterBlock,
  Container,
  NavBlock,
  Number,
  NumberContainer,
  Title,
} from './DraftRoundTitleBar.styles';

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
          <div onClick={() => onNavRoundChange(-1)}>{'<'}</div>
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
          <div onClick={() => onNavRoundChange(1)}>{'>'}</div>
        )}
      </NavBlock>
    </Container>
  );
};

export default DraftRoundTitleBar;
