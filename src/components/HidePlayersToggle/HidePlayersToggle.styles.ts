import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 14px;
  border-color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
  background-color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.WHITE};
  padding: 2px;
  background-clip: content-box;
`;

export const Text = styled.p`
  margin: 0;
  padding-left: 0.4rem;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${COLORS.PRIMARY_GREEN};
`;
