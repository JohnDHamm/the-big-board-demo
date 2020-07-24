import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div<{ hasPick: boolean }>`
  border: 1px solid grey;
  border-color: ${(props) =>
    props.hasPick ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  max-width: 400px;
  height: 42px;
  border-radius: 21px;
  display: flex;
  margin: 4px 0;
`;

export const PickNumBlock = styled.div<{ hasPick: boolean }>`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: ${(props) =>
    props.hasPick ? COLORS.BLACK : COLORS.DISABLED_GRAY};
  justify-content: center;
  align-items: center;
`;

export const PickNum = styled.h2<{ hasPick: boolean }>`
  margin: 0;
  color: ${(props) => (props.hasPick ? COLORS.PRIMARY_GREEN : COLORS.WHITE)};
`;

export const OwnerBlock = styled.div<{ hasPick: boolean }>`
  display: flex;
  flex: 1;
  /* border: 1px solid red; */
  padding-left: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
  color: ${(props) => (props.hasPick ? COLORS.BLACK : COLORS.DISABLED_GRAY)};
`;

export const PlayerBlock = styled.div<{ bgColor: string; accentColor: string }>`
  display: flex;
  flex: 2.5;
  justify-content: space-between;
  /* border: 1px solid green; */
  border-left-width: 8px;
  border-left-color: ${(props) => props.accentColor};
  border-left-style: solid;
  padding-left: 0.5rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 0 21px 21px 0;
`;

export const PlayerNameBlock = styled.div`
  /* border: 1px dashed blue; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const PlayerFirstName = styled.p`
  margin: 0;
  margin-bottom: -0.5rem;
  font-size: 10px;
  color: ${COLORS.WHITE};
`;

export const PlayerLastName = styled.p`
  margin: 0;
  color: ${COLORS.WHITE};
  font-size: 1.75rem;
`;

export const PositionBlock = styled.div<{ position: NFL_Position }>`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
  justify-content: center;
  align-items: center;
`;

export const Position = styled.p`
  margin: 0;
  color: ${COLORS.WHITE};
  font-size: 1.25rem;
`;
