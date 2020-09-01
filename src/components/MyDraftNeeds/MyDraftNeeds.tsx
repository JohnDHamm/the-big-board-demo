import React from 'react';
import { NeedLine, Title } from './MyDraftNeeds.styles';

declare global {
  type PositionNeeds = {
    [key in NFL_Position]: number;
  };
  interface Props {
    myPositionNeeds: PositionNeeds;
  }
}

const POSITIONS: NFL_Position[] = ['QB', 'RB', 'WR', 'TE', 'D', 'K'];

const MyDraftNeeds: React.FC<Props> = ({ myPositionNeeds }) => {
  const renderNeeds = (): JSX.Element[] => {
    const list: JSX.Element[] = [];
    POSITIONS.forEach((pos) => {
      list.push(
        <NeedLine key={pos} position={pos}>
          {pos} - {myPositionNeeds[pos]}
        </NeedLine>
      );
    });
    return list;
  };

  return (
    <div>
      <Title>My Draft Needs</Title>
      {renderNeeds()}
    </div>
  );
};

export default MyDraftNeeds;
