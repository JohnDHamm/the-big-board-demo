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
}

const BottomTicker: React.FC<Props> = ({ ownerOnClock = '--' }) => {
  return (
    <Container>
      <OnClockBlock>
        <OnClockText>ON THE CLOCK:</OnClockText>
        <Name>{ownerOnClock}</Name>
      </OnClockBlock>
      <TickerBlock></TickerBlock>
    </Container>
  );
};

export default BottomTicker;
