import React from 'react';
import {
  Container,
  OnClockBlock,
  OnClockText,
  Name,
  TickerBlock,
} from './BottomTicker.styles';

interface Props {
  ownerOnClock?: string;
  ticker: JSX.Element;
}

const BottomTicker: React.FC<Props> = ({ ownerOnClock = '--', ticker }) => {
  return (
    <Container>
      <OnClockBlock>
        <OnClockText>ON THE CLOCK:</OnClockText>
        <Name>{ownerOnClock}</Name>
      </OnClockBlock>
      <TickerBlock>{ticker}</TickerBlock>
    </Container>
  );
};

export default BottomTicker;
