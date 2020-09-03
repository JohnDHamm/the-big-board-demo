import React from 'react';
import {
  Name,
  PickBlock,
  Position,
  SelectionNum,
  Team,
  Title,
} from './PicksByOwner.styles';
import Accordion from '../Accordion/Accordion';

declare global {
  interface OwnerPick {
    selectionNumber: number;
    name: string;
    position: NFL_Position;
    teamAbbv: string;
  }

  type OwnerPicks = { [key: string]: OwnerPick[] };

  interface PicksByOwnerProps {
    ownerPicks: OwnerPicks;
  }
}

const PicksByOwner: React.FC<PicksByOwnerProps> = ({ ownerPicks }) => {
  const renderPicks = (picks: OwnerPick[]): JSX.Element[] => {
    const picksList: JSX.Element[] = [];
    picks.forEach((pick) => {
      const { name, position, selectionNumber, teamAbbv } = pick;
      picksList.push(
        <PickBlock key={selectionNumber}>
          <SelectionNum>#{selectionNumber}</SelectionNum>
          <Name>{name}</Name>
          <Position position={position}>{position}</Position>
          <Name>|</Name>
          <Team>{teamAbbv}</Team>
        </PickBlock>
      );
    });
    return picksList;
  };

  const renderOwners = (): JSX.Element[] => {
    const list: JSX.Element[] = [];
    for (let key in ownerPicks) {
      list.push(
        <Accordion key={key} label={key}>
          <div>{renderPicks(ownerPicks[key])}</div>
        </Accordion>
      );
    }
    return list;
  };

  return (
    <div>
      <Title>PICKS BY OWNER</Title>
      {renderOwners()}
    </div>
  );
};

export default PicksByOwner;
