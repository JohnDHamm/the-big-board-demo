import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Title = styled.p`
  margin: 0;
  color: ${COLORS.PRIMARY_GREEN};
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
`;

export const PlayerBlock = styled.div`
  margin: -0.5rem 0;
`;

const Text = styled.span`
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: ${COLORS.SECONDARY_GRAY};
`;

const BlockText = styled(Text)`
  font-family: ${FONTS.BLOCKLETTER};
`;

const NameText = styled(Text)`
  font-family: ${FONTS.NAMES};
`;

export const RankNum = styled(BlockText)`
  color: ${COLORS.PRIMARY_GREEN};
`;

export const Name = styled(NameText)``;

export const Position = styled(BlockText)<{ position: NFL_Position }>`
  color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
`;

export const Team = styled(BlockText)``;
