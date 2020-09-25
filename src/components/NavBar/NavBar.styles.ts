import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS, HEIGHTS, SCREEN_WIDTHS, Z_HEIGHTS } from '../../styles';

export const Container = styled.div`
  height: ${HEIGHTS.NAVBAR_DESKTOP};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${COLORS.BLACK};
  z-index: ${Z_HEIGHTS.NAVBAR};
  overflow: hidden;

  @media screen and (${SCREEN_WIDTHS.TABLET}) {
    height: ${HEIGHTS.NAVBAR_TABLET};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  width: 280px;
  padding-left: 1rem;
  padding-top: 0.5rem;

  @media screen and (${SCREEN_WIDTHS.TABLET}) {
    width: 240px;
    padding-left: 0rem;
  }
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 200px;
  }
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
    font-size: 1.75rem;
  }
  @media screen and (${SCREEN_WIDTHS.TABLET}) {
    margin-bottom: 0;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  padding-bottom: 0.5rem;

  @media screen and (${SCREEN_WIDTHS.TABLET}) {
    width: 90%;
    justify-content: space-between;
    margin-right: 0;
    padding-bottom: 0.25rem;
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;

export const TabBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileTabIcon = styled.div<{ active: boolean }>`
  display: none;

  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    display: block;
    width: 24px;
    height: 24px;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
      props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
    border-radius: 13px;
    line-height: 24px;
    text-align: center;
    font-family: ${FONTS.BLOCKLETTER};
    font-size: 1.35rem;
    color: ${(props) =>
      props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
    &:hover {
      color: ${(props) => (props.active ? COLORS.PRIMARY_GREEN : COLORS.WHITE)};
    }
  }
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
    font-size: 0.75rem;
  }
  @media screen and (${SCREEN_WIDTHS.TABLET}) {
    margin-left: 0rem;
  }
`;
