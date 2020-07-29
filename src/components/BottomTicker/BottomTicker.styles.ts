import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  height: 2.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 10;
`;

export const OnClockBlock = styled.div`
  display: flex;
  width: auto;
  align-items: flex-end;
  padding: 0.5rem 1rem;
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
  margin-top: 0;
  margin-bottom: -0.7rem;
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
`;
