import styled, { keyframes } from 'styled-components';
import { COLORS, Z_HEIGHTS, FONTS, SCREEN_WIDTHS } from '../../styles';

const slideUp = keyframes`
  from {
    margin-top: 100vh;
  }
  to {
    margin-top: 0;
  }
`;

export const Container = styled.div`
  animation: ${slideUp} 0.5s ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.WARN};
  z-index: ${Z_HEIGHTS.BACKDROP};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const Title = styled.div`
  width: 70%;
  padding-top: 1rem;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 2px;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 90%;
  }
`;
export const TitleText = styled.p`
  margin: 0;
  margin-top: -1rem;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.WHITE};
  text-shadow: 2px 2px ${COLORS.SECONDARY_GRAY};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.25rem;
    text-shadow: 1px 1px ${COLORS.SECONDARY_GRAY};
  }
`;

export const Status = styled.p`
  margin: 0;
  margin-top: 2rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.5rem;
  color: ${COLORS.WHITE};
  text-shadow: 2px 2px ${COLORS.SECONDARY_GRAY};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.5rem;
    text-shadow: 1px 1px ${COLORS.SECONDARY_GRAY};
  }
`;

export const Message = styled.p`
  margin: 0;
  margin-top: 2rem;
  font-family: ${FONTS.NAMES};
  font-size: 1.5rem;
  color: ${COLORS.SECONDARY_GRAY};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1rem;
  }
`;

export const ActionWrapper = styled.div`
  margin-top: 4rem;
`;
