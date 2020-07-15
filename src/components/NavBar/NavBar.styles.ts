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

export const TextLogo = styled(Link)`
  font-size: 2rem;
  color: #bada55;
  font-weight: 900;
  text-decoration: none;
`;

export const TabsContainer = styled.div`
  display: flex;
`;

export const TabLink = styled(Link)`
  text-decoration: none;
`;

export const Tab = styled.div<{ active: boolean }>`
  margin: 0 2rem;
  color: ${(props) => (props.active ? '#bada55' : 'white')};
  font-size: 1.25rem;
  font-weight: bold;
  &:hover {
    color: grey;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
