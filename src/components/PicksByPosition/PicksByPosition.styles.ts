import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Title = styled.p`
  margin: 0;
  color: ${COLORS.PRIMARY_GREEN};
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
`;

export const RoundBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const RoundNumContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${COLORS.BLACK};
  display: flex;
  justify-content: center;
`;

export const RoundNumber = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const PickContainer = styled.div<{ position: NFL_Position | null }>`
  margin-left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 13px;
  border: 1px solid
    ${(props) =>
      props.position !== null ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  background-color: ${(props) =>
    props.position !== null
      ? COLORS.NFL_POSITIONS[props.position]
      : COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PickPosition = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1rem;
  color: ${COLORS.WHITE};
`;
