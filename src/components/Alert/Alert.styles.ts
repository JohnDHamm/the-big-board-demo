import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS, HEIGHTS, SCREEN_WIDTHS, Z_HEIGHTS } from '../../styles';

const ALERT_HEIGHT = '56px';

const slideUpAndDown = keyframes`
  from {
    bottom:  -${ALERT_HEIGHT};
  }
  17%
  {
    bottom: 0;
  }
  83%
  {
    bottom: 0;
  }
  to
  {
    bottom: -${ALERT_HEIGHT};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const getColor = (type: AlertType): string => {
  let color: string;
  switch (type) {
    case 'success':
      color = COLORS.SUCCESS;
      break;
    case 'warn':
      color = COLORS.WARN;
      break;
    case 'err':
      color = COLORS.ERR;
      break;
  }
  return color;
};

export const Container = styled.div<{ sticky: boolean; type: AlertType }>`
  background-color: ${(props) => getColor(props.type)};
  width: 100%;
  height: ${ALERT_HEIGHT};
  position: fixed;
  animation-name: ${(props) => (props.sticky ? fadeIn : slideUpAndDown)};
  animation-duration: ${(props) => (props.sticky ? '0.5s' : '3s')};
  animation-timing-function: ease;
  bottom: ${(props) => (props.sticky ? 0 : `-${ALERT_HEIGHT}`)};
  left: 0;
  text-align: center;
  z-index: ${Z_HEIGHTS.ALERT};
`;

export const Message = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.WHITE};
  line-height: ${ALERT_HEIGHT};

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.25rem;
  }
`;
