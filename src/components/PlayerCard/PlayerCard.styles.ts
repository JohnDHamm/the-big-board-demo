import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  max-width: 400px;
  height: 42px;
  display: flex;
  margin: 6px 0;
  position: relative;
`;

export const FootballContainer = styled.div`
  width: 66px;
  position: absolute;
  top: -2px;
  left: 0px;
`;

export const FootballText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.75rem;
  color: ${COLORS.WHITE};
`;

export const PlayerBlock = styled.div<{ bgColor: string }>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-left: 30px;
  padding-left: 38px;
  background-color: ${(props) => props.bgColor};
`;

export const ByeBlock = styled.div<{ bgColor: string }>`
  width: 1.75rem;
  border-radius: 0 8px 8px 0;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ByeText = styled.p<{ textColor: string }>`
  margin: 0;
  margin-top: -0.15rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1rem;
  color: ${(props) => props.textColor};
`;

export const ByeNum = styled.p<{ textColor: string }>`
  font-family: ${FONTS.BLOCKLETTER};
  margin: 0;
  margin-top: -0.75rem;
  font-size: 1.75rem;
  color: ${(props) => props.textColor};
`;
