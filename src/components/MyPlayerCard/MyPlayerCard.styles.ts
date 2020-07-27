import styled from 'styled-components';
import { FONTS } from '../../styles';

export const Container = styled.div`
  max-width: 400px;
  height: 42px;
  display: flex;
  margin: 6px 0;
  position: relative;
`;

export const PlayerBlock = styled.div<{ bgColor: string }>`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;

const EndBlock = styled.div<{ bgColor: string }>`
  width: 1.75rem;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RoundBlock = styled(EndBlock)`
  border-radius: 8px 0 0 8px;
`;

export const ByeBlock = styled(EndBlock)`
  border-radius: 0 8px 8px 0;
`;

export const EndText = styled.p<{ textColor: string }>`
  margin: 0;
  margin-top: -0.15rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1rem;
  color: ${(props) => props.textColor};
`;

export const EndNum = styled.p<{ textColor: string }>`
  margin: 0;
  margin-top: -0.75rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.75rem;
  color: ${(props) => props.textColor};
`;

const addMargin = () => `margin-left: 2px;`;

export const RoundText = styled(EndText)`
  ${addMargin()}
`;

export const RoundNum = styled(EndNum)`
  ${addMargin()}
`;
