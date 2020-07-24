import styled from 'styled-components';
import { COLORS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SortCircle = styled.div<{
  selected: boolean;
}>`
  width: 60px;
  height: 42px;
  margin: 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 75%;
  border-color: ${(props) =>
    props.selected ? COLORS.BLACK : COLORS.DISABLED_GRAY};
  background-color: ${(props) =>
    props.selected ? COLORS.PRIMARY_GREEN : COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SortText = styled.p<{ selected: boolean }>`
  color: ${(props) => (props.selected ? COLORS.WHITE : COLORS.DISABLED_GRAY)};
  font-size: 1rem;
`;
