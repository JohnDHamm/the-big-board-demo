import React from 'react';
import {
  Name,
  PlayerBlock,
  Position,
  RankNum,
  Team,
  Title,
} from './HighestAvailablePlayers.styles';

declare global {
  interface HighestRankPlayer {
    name: string;
    position: NFL_Position;
    rank: number;
    teamAbbv: string;
  }
}

interface Props {
  players: HighestRankPlayer[];
}

const HighestAvailablePlayers: React.FC<Props> = ({ players }) => {
  const renderPlayers = (): JSX.Element[] => {
    const list: JSX.Element[] = [];
    for (let i = 0; i < players.length; i++) {
      const { name, position, rank, teamAbbv } = players[i];
      list.push(
        <PlayerBlock key={i}>
          <RankNum>{rank}</RankNum>
          <Name>{name}</Name>
          <Position position={position}>{position}</Position>
          <Team>{teamAbbv}</Team>
        </PlayerBlock>
      );
    }
    return list;
  };

  return (
    <div>
      <Title>HIGHEST RANK AVAILABLE</Title>
      {renderPlayers()}
    </div>
  );
};

export default HighestAvailablePlayers;
