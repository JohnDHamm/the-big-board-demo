import styled from 'styled-components';
import { COLORS, FONTS, Z_HEIGHTS } from '../../styles';

export const Container = styled.div`
  height: 2.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: ${Z_HEIGHTS.NAVBAR};
`;

export const OnClockBlock = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  padding: 0 1rem;
  background-color: ${COLORS.PRIMARY_GREEN};
`;

export const OnClockText = styled.p`
  margin: 0;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${COLORS.WHITE};
`;

export const Name = styled.p`
  margin: 0;
  padding-left: 0.25rem;
  padding-right: 1rem;
  font-family: ${FONTS.NAMES};
  font-size: 2rem;
  color: ${COLORS.BLACK};
`;

export const TickerBlock = styled.div`
  display: flex;
  flex: 1;
  background-color: ${COLORS.SECONDARY_GRAY};
  padding-left: 1rem;
  align-items: flex-end;
`;
