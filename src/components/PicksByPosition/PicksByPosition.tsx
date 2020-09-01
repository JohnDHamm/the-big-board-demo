import React from 'react';
import {
  PickContainer,
  PickPosition,
  RoundBlock,
  RoundNumContainer,
  RoundNumber,
  Title,
} from './PicksByPosition.styles';

declare global {
  type PickPosition = NFL_Position | null;

  interface PicksByPositionProps {
    picks: PickPosition[][];
  }
}

const PicksByPosition: React.FC<PicksByPositionProps> = ({ picks }) => {
  const renderPicks = (): JSX.Element[] => {
    const list: JSX.Element[] = [];
    for (let i = 0; i < picks.length; i++) {
      const round: JSX.Element[] = [];
      for (let j = 0; j < picks[i].length; j++) {
        const position = picks[i][j];
        round.push(
          <PickContainer key={j} position={position}>
            {position && <PickPosition>{position}</PickPosition>}
          </PickContainer>
        );
      }
      list.push(
        <RoundBlock key={i}>
          <RoundNumContainer>
            <RoundNumber>{i + 1}</RoundNumber>
          </RoundNumContainer>
          {round}
        </RoundBlock>
      );
    }

    return list;
  };

  return (
    <div>
      <Title>PICKS BY POSITION</Title>
      {picks && renderPicks()}
    </div>
  );
};

export default PicksByPosition;
