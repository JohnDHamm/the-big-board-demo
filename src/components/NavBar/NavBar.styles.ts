import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, HEIGHTS, SCREEN_WIDTHS, Z_HEIGHTS } from '../../styles';

export const Container = styled.div`
  height: ${HEIGHTS.NAVBAR_TABLET};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem;
  background-color: ${COLORS.BLACK};
  z-index: ${Z_HEIGHTS.NAVBAR};
  overflow: hidden;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    height: ${HEIGHTS.NAVBAR_MOBILE};
  }
`;

export const LogoContainer = styled.div``;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const TextLogo = styled.p<{ active: boolean }>`
  margin: 0;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.25rem;
  color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  font-weight: 900;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1.25rem;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-right: 2rem;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    margin-right: 1rem;
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;

export const Tab = styled.div<{ active: boolean }>`
  margin-left: 4rem;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  &:hover {
    color: ${(props) => (props.active ? COLORS.PRIMARY_GREEN : COLORS.WHITE)};
  }
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1rem;
    margin-left: 2rem;
  }
`;

export const DisabledTab = styled(Tab)<{ active: boolean }>`
  &:hover {
    color: ${COLORS.DISABLED_GRAY};
  }
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    font-size: 1rem;
  }
`;
