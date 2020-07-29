import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Page = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

export const TopBlock = styled.div`
  display: flex;
  flex: 0.25;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 4rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const Content = styled.div`
  width: 400px;
  /* display: flex; */
  flex: 0.75;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
`;
