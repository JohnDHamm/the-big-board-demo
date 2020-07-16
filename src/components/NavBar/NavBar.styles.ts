import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
`;

export const LogoContainer = styled.div``;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const TextLogo = styled.h1<{ active: boolean }>`
  margin: 0;
  font-size: 2.25rem;
  color: ${(props) => (props.active ? '#bada55' : 'grey')};
  font-weight: 900;
`;

export const TabsContainer = styled.div`
  display: flex;
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;

export const Tab = styled.div<{ active: boolean }>`
  margin: 0 2rem;
  color: ${(props) => (props.active ? '#bada55' : 'grey')};
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    color: ${(props) => (props.active ? 'white' : 'grey')};
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
