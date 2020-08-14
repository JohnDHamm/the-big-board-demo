import styled, { keyframes } from 'styled-components';
import { COLORS, Z_HEIGHTS, FONTS, SCREEN_WIDTHS } from '../../styles';
import { NFL_TEAMS } from '../../assets/images';

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
  background-color: ${COLORS.PRIMARY_GREEN};
  z-index: ${Z_HEIGHTS.BACKDROP};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
`;

export const CloseBtn = styled.div`
  width: 24px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 2.5rem;
  color: ${COLORS.WHITE};
  text-shadow: 2px 2px ${COLORS.SECONDARY_GRAY};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.75rem;
    text-shadow: 1px 1px ${COLORS.SECONDARY_GRAY};
  }
`;

export const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FirstLine = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: -0.5rem;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    margin-top: 0;
  }
`;

export const MessageText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.5rem;
  color: ${COLORS.WHITE};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.75rem;
  }
`;

export const PickNumber = styled.p`
  margin: 0;
  margin-bottom: -5px;
  padding-left: 0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 3.5rem;
  color: ${COLORS.BLACK};
  text-shadow: 2px 2px ${COLORS.WHITE};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    margin-bottom: -0.25rem;
    font-size: 2.25rem;
    text-shadow: 1px 1px ${COLORS.WHITE};
  }
`;

export const PickNumberOrdinal = styled.p`
  margin: 0;
  margin-bottom: 4px;
  padding-right: 0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.WHITE};
  text-shadow: 2px 2px ${COLORS.BLACK};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.25rem;
    text-shadow: 1px 1px ${COLORS.BLACK};
  }
`;

export const OwnerText = styled.p`
  margin: 0;
  margin-top: -1rem;
  margin-bottom: -3px;
  padding: 0 0.75rem;
  font-family: ${FONTS.NAMES};
  font-size: 3.5rem;
  color: ${COLORS.BLACK};
  text-shadow: 2px 2px ${COLORS.WHITE};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    margin-top: 0;
    font-size: 2.25rem;
    text-shadow: 1px 1px ${COLORS.WHITE};
  }
`;

export const Pick = styled.div<{
  colors: { primary: string; secondary: string };
  team: string;
}>`
  position: relative;
  margin-top: 3rem;
  padding-top: 2rem;
  width: 400px;
  height: 240px;
  border: 4px solid orange;
  border-color: ${(props) => props.colors.secondary};
  background: url(${(props) => NFL_TEAMS[props.team]}) no-repeat;
  background-size: 80%;
  background-position: 50% 100px;
  background-color: ${(props) => props.colors.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.4);

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: auto;
    min-width: 300px;
    max-width: 400px;
    height: 200px;
  }
`;

export const FootballContainer = styled.div`
  width: 100px;
  position: absolute;
  top: -40px;
  left: calc(50% - 50px);
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 85px;
    top: -35px;
    left: calc(50% - 43px);
  }
`;

export const PositionText = styled.p`
  font-family: ${FONTS.BLOCKLETTER};
  margin: 0;
  font-size: 2.5rem;
  color: ${COLORS.WHITE};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 2rem;
  }
`;

export const FirstName = styled.p`
  margin: 0;
  margin-bottom: -1rem;
  font-family: ${FONTS.NAMES};
  font-size: 1.5rem;
  color: ${COLORS.WHITE};
  text-shadow: 1px 1px ${COLORS.BLACK};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    margin-bottom: -0.5rem;
    font-size: 1rem;
  }
`;

export const LastName = styled.p`
  margin: 0;
  font-family: ${FONTS.NAMES};
  font-size: 3.5rem;
  font-weight: bold;
  color: ${COLORS.WHITE};
  text-shadow: 2px 2px ${COLORS.BLACK};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 2.5rem;
  }
`;
