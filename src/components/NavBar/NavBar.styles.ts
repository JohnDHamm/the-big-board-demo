import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 1rem;
  background-color: ${COLORS.BLACK};
`;

export const LogoContainer = styled.div``;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const TextLogo = styled.h1<{ active: boolean }>`
  margin: 0;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.25rem;
  color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  font-weight: 900;
`;

export const TabsContainer = styled.div`
  display: flex;
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;

export const Tab = styled.div<{ active: boolean }>`
  margin-left: 2rem;
  margin-bottom: -0.5rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  &:hover {
    color: ${(props) => (props.active ? COLORS.PRIMARY_GREEN : COLORS.WHITE)};
  }
`;

export const DisabledTab = styled(Tab)<{ active: boolean }>`
  &:hover {
    color: ${COLORS.DISABLED_GRAY};
  }
`;
