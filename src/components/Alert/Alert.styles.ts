import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS, HEIGHTS, Z_HEIGHTS } from '../../styles';

const ALERT_HEIGHT = '56px';

const slideUp = keyframes`
  from {
    bottom: calc(${HEIGHTS.BOTTOM_TICKER} - ${ALERT_HEIGHT});
  }
  17%
  {
    bottom: ${HEIGHTS.BOTTOM_TICKER};
  }
  83%
  {
    bottom: ${HEIGHTS.BOTTOM_TICKER};
  }
  to
  {
    bottom: calc(${HEIGHTS.BOTTOM_TICKER} - ${ALERT_HEIGHT});
  }
`;

export const Container = styled.div`
  background-color: ${COLORS.SUCCESS};
  width: 100%;
  height: ${ALERT_HEIGHT};
  position: absolute;
  animation: ${slideUp} 3s ease;
  bottom: calc(${HEIGHTS.BOTTOM_TICKER} - ${ALERT_HEIGHT});
  left: 0;
  text-align: center;
  z-index: ${Z_HEIGHTS.ALERT};
`;

export const Message = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.WHITE};
`;
