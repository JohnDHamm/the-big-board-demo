import styled from 'styled-components';
import { COLORS, FONTS, SCREEN_WIDTHS } from '../../styles';

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const TopBlock = styled.div`
  display: flex;
  flex: 0.15;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 480px;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 300px;
  }
`;

export const Content = styled.div`
  width: 400px;
  flex: 0.85;
  flex-direction: column;
  align-items: center;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 90%;
  }
`;

export const SignIn = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.5rem;
  color: ${COLORS.SECONDARY_GRAY};
  text-align: center;
`;

export const LoadingMsg = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.DISABLED_GRAY};
  text-align: center;
`;

export const ContentItem = styled.div`
  margin-bottom: 1rem;
`;

export const BtnBlock = styled.div`
  margin-top: 2rem;
  width: auto;
`;

export const ErrorMsg = styled.p`
  margin: 0;
  padding-top: 1rem;
  font-family: ${FONTS.NAMES};
  font-size: 1.5rem;
  color: ${COLORS.ERR};
  text-align: center;
`;
