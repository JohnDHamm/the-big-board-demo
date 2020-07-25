import React from 'react';
import {
  ByeBlock,
  ByeText,
  ByeNum,
  Container,
  Football,
  FootballText,
  PlayerBlock,
} from './PlayerCard.styles';
import CardNameBlock from '../CardNameBlock/CardNameBlock';

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
        primary: 'lightgrey',
        secondary: 'lightgrey',
      });
    }
  }, [player]);

  return (
    <Container>
      <Football position={player.position}>
        <FootballText>{rank || '--'}</FootballText>
      </Football>
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
