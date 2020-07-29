import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div<{ width?: string }>`
  padding: 0 1rem;
  background-color: ${COLORS.PRIMARY_GREEN};
  border-radius: 100px;
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export const Label = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${COLORS.WHITE};
  text-align: center;
`;
