import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS, SCREEN_WIDTHS } from '../../styles';

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  width: 480px;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 300px;
  }
`;

export const Content = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 90%;
  }
`;

export const DemoTitle = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.5rem;
  color: ${COLORS.SECONDARY_GRAY};
  text-align: center;
`;

export const BtnBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 400px;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 90%;
  }
`;

export const SelectBlock = styled.div`
  width: 400px;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 90%;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.SECONDARY_GRAY};
`;

export const StyledSpan = styled.span<{ color?: string }>`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${(props) => (props.color ? props.color : COLORS.SECONDARY_GRAY)};
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.5rem;
  }
`;

export const DescriptionBlock = styled.p`
  margin: 1.5rem 0;
  font-family: ${FONTS.NAMES};
  font-size: 1.25rem;
  color: ${COLORS.SECONDARY_GRAY};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const fade = keyframes`
  0% {
    opacity: 1
  }
  50% {
    opacity: 0.2
  }
  100% {
    opacty: 1
  }
`;

export const LoadingFootballContainer = styled.div`
  margin-top: 3rem;
  width: 100px;
  height: 100px;
`;

export const LoadingFootball = styled.img`
  width: 100px;
  animation: ${rotate} 1s linear infinite;
`;

export const LoadingText = styled(Text)`
  color: ${COLORS.PRIMARY_GREEN};
  animation: ${fade} 1s linear infinite;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.5rem;
  }
`;
