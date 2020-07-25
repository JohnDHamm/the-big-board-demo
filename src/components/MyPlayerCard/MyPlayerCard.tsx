import React from 'react';
import {
  ByeBlock,
  EndText,
  EndNum,
  Container,
  PlayerBlock,
  RoundBlock,
  RoundNum,
  RoundText,
} from './MyPlayerCard.styles';
import CardNameBlock from '../CardNameBlock/CardNameBlock';

declare global {
  interface MyPlayerCardInterface {
    player: PlayerInfo;
    round: number;
    team: Team;
  }
}

const MyPlayerCard: React.FC<MyPlayerCardInterface> = ({
  player,
  round,
  team,
}) => {
  const [colors] = React.useState(team.colors);

  return (
    <Container>
      <RoundBlock bgColor={colors.secondary}>
        <RoundText textColor={colors.primary}>RND</RoundText>
        <RoundNum textColor={colors.primary}>{round}</RoundNum>
      </RoundBlock>
      <PlayerBlock bgColor={colors.primary}>
        <CardNameBlock
          firstName={player.firstName}
          lastName={player.lastName}
        />
      </PlayerBlock>
      <ByeBlock bgColor={colors.secondary}>
        <EndText textColor={colors.primary}>BYE</EndText>
        <EndNum textColor={colors.primary}>{team && team.byeWeek}</EndNum>
      </ByeBlock>
    </Container>
  );
};

export default MyPlayerCard;
