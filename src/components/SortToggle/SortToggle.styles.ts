import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const FootballContainer = styled.div`
  width: 66px;
  margin: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SortText = styled.p<{ selected: boolean }>`
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${(props) => (props.selected ? COLORS.WHITE : COLORS.DISABLED_GRAY)};
`;
