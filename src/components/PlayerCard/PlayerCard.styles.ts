import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  /* border: 1px dotted grey; */
  max-width: 400px;
  height: 42px;
  display: flex;
  margin: 6px 0;
  position: relative;
`;

export const Football = styled.div<{ position: NFL_Position }>`
  height: 42px;
  width: 60px;
  border: 2px solid #bada55;
  border-radius: 70%;
  position: absolute;
  top: -2px;
  left: -1px;
  background-color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FootballText = styled.p`
  margin: 0;
  font-size: 1.75rem;
  color: white;
`;

export const PlayerBlock = styled.div<{ bgColor: string }>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-left: 30px;
  padding-left: 38px;
  background-color: ${(props) => props.bgColor};
`;

export const PlayerNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const PlayerFirstName = styled.p`
  margin: 0;
  font-size: 10px;
  color: white;
`;

export const PlayerLastName = styled.p`
  margin: 0;
  color: white;
  font-size: 24px;
`;

export const ByeBlock = styled.div<{ bgColor: string }>`
  width: 1.75rem;
  border-radius: 0 8px 8px 0;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
`;

export const ByeText = styled.p<{ textColor: string }>`
  color: ${(props) => props.textColor};
  margin: 0;
  font-size: 0.6rem;
`;

export const ByeNum = styled.p<{ textColor: string }>`
  color: ${(props) => props.textColor};
  margin: 0;
  font-size: 1.5rem;
`;
