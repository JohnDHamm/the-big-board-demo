import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const PositionBlock = styled.div<{ position: NFL_Position }>`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
  border-color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
  border-width: 4px;
  border-style: solid;
  border-radius: 8px;
`;

export const TitleBlock = styled.div<{ position: NFL_Position }>`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
  border-radius: 4px 4px 0 0;
`;

export const FootballContainer = styled.div`
  width: 60px;
`;

export const FootballText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.8rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const Title = styled.p`
  margin: 0;
  padding-left: 0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const SlotsBlock = styled.div`
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;
