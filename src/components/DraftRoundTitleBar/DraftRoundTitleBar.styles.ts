import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  height: 42px;
  max-width: 400px;
  background-color: ${COLORS.PRIMARY_GREEN};
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
  color: ${COLORS.WHITE};
`;

export const CenterBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: ${COLORS.WHITE};
  padding-right: 0.5rem;
  font-size: 2rem;
`;

export const NumberContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 26px;
  border: 2px solid white;
  background-color: ${COLORS.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.h2`
  margin: 0;
  color: ${COLORS.WHITE};
  font-size: 2.2rem;
`;
