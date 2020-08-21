import styled, { css, keyframes } from 'styled-components';
import { COLORS, FONTS, HEIGHTS, SCREEN_WIDTHS, Z_HEIGHTS } from '../../styles';

const flashingColor = keyframes`
  0% {
    background-color: ${COLORS.PRIMARY_GREEN};
  }
  50% {
    background-color: ${COLORS.PRIMARY_GREEN};
  }
  51% {
    background-color: ${COLORS.SUCCESS};
  }
  100% {
    background-color: ${COLORS.SUCCESS};
  }
`;

const curAnim = css`
  animation: ${flashingColor} 1s infinite;
`;

export const Container = styled.div`
  height: ${HEIGHTS.BOTTOM_TICKER};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: ${Z_HEIGHTS.NAVBAR};
`;

export const OnClockBlock = styled.div<{ currentPick: boolean }>`
  display: flex;
  width: auto;
  align-items: center;
  padding: 0 1rem;
  background-color: ${COLORS.PRIMARY_GREEN};
  ${(props) => (props.currentPick ? curAnim : null)}
  
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

export const Current = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.WHITE};

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.75rem;
  }
`;

export const OnClockText = styled.p`
  margin: 0;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${COLORS.WHITE};

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1rem;
  }
`;

export const Name = styled.p`
  margin: 0;
  padding-left: 0.25rem;
  padding-right: 1rem;
  font-family: ${FONTS.NAMES};
  font-size: 2rem;
  color: ${COLORS.BLACK};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.75rem;
  }
`;

export const TickerBlock = styled.div`
  display: flex;
  flex: 1;
  background-color: ${COLORS.SECONDARY_GRAY};
  padding-left: 1rem;
  align-items: flex-end;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    display: none;
  }
`;
