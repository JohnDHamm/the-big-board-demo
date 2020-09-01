import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Title = styled.p`
  margin: 0;
  color: ${COLORS.PRIMARY_GREEN};
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
`;

export const NeedLine = styled.div<{ position: NFL_Position }>`
  margin: -0.5rem 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
`;
