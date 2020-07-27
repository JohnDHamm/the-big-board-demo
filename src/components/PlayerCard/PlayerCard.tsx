import React from 'react';
import {
  ByeBlock,
  ByeText,
  ByeNum,
  Container,
  FootballContainer,
  FootballText,
  PlayerBlock,
} from './PlayerCard.styles';
import CardNameBlock from '../CardNameBlock/CardNameBlock';
import Football from '../Football/Football';
import { COLORS } from '../../styles';

declare global {
  interface PlayerCardInterface {
    player: PlayerInfo;
    rank: number | null;
    team: Team;
  }
}

const PlayerCard: React.FC<PlayerCardInterface> = ({ player, rank, team }) => {
  const [colors, setColors] = React.useState(team.colors);

  React.useEffect(() => {
    if (!player.available) {
      setColors({
        primary: COLORS.DISABLED_GRAY,
        secondary: COLORS.DISABLED_GRAY,
      });
    }
  }, [player]);

  return (
    <Container>
      <FootballContainer>
        <Football
          fillColor={
            player.available
              ? COLORS.NFL_POSITIONS[player.position]
              : COLORS.DISABLED_GRAY
          }
        >
          {rank && <FootballText>{rank}</FootballText>}
        </Football>
      </FootballContainer>
      <PlayerBlock bgColor={colors.primary}>
        <CardNameBlock
          firstName={player.firstName}
          lastName={player.lastName}
        />
      </PlayerBlock>
      <ByeBlock bgColor={colors.secondary}>
        <ByeText textColor={colors.primary}>BYE</ByeText>
        <ByeNum textColor={colors.primary}>{team && team.byeWeek}</ByeNum>
      </ByeBlock>
    </Container>
  );
};

export default PlayerCard;
