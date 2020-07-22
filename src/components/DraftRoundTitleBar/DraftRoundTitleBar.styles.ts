import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  max-width: 400px;
  background-color: #bada55;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
`;

export const NavBlock = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: white;
  padding-right: 0.5rem;
  font-size: 2rem;
`;

export const NumberContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 26px;
  border: 2px solid white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.h2`
  margin: 0;
  color: white;
  font-size: 2.2rem;
`;
