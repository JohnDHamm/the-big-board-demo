import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const PositionCircle = styled.div<{
  selected: boolean;
  position: NFL_Position;
}>`
  width: 42px;
  height: 42px;
  border-width: 1px;
  border-style: solid;
  border-radius: 22px;
  border-color: ${(props) =>
    props.selected ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  background-color: ${(props) =>
    props.selected ? COLORS.NFL_POSITIONS[props.position] : COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PositionText = styled.p<{ selected: boolean }>`
  color: ${(props) => (props.selected ? COLORS.WHITE : COLORS.DISABLED_GRAY)};
  font-size: 1.4rem;
`;
