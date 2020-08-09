import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div<{ width?: string; alternate: boolean }>`
  padding: 0 1rem;
  background-color: ${(props) =>
    props.alternate ? COLORS.WHITE : COLORS.PRIMARY_GREEN};
  border-radius: 100px;
  border-color: ${(props) =>
    props.alternate ? COLORS.DISABLED_GRAY : COLORS.PRIMARY_GREEN};
  border-width: 1px;
  border-style: solid;
  width: ${(props) => (props.width ? props.width : 'auto')};
  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.p<{ alternate: boolean }>`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${(props) => (props.alternate ? COLORS.DISABLED_GRAY : COLORS.WHITE)};
  text-align: center;
`;
