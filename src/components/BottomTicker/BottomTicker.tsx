import React from 'react';
import {
  Container,
  Current,
  OnClockBlock,
  OnClockText,
  Name,
  TickerBlock,
} from './BottomTicker.styles';

interface Props {
  currentPick?: boolean;
  ownerOnClock?: string;
  ticker?: JSX.Element;
}

const BottomTicker: React.FC<Props> = ({
  currentPick = false,
  ownerOnClock = '--',
  ticker,
}) => {
  return (
    <Container>
      <OnClockBlock currentPick={currentPick}>
        {currentPick ? (
          <Current>YOU ARE ON THE CLOCK</Current>
        ) : (
          <>
            <OnClockText>ON THE CLOCK:</OnClockText>
            <Name>{ownerOnClock}</Name>
          </>
        )}
      </OnClockBlock>
      <TickerBlock>{ticker}</TickerBlock>
    </Container>
  );
};

export default BottomTicker;
