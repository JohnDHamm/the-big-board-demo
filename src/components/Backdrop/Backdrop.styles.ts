import styled from 'styled-components';
import { Z_HEIGHTS } from '../../styles';

export const StyledBackdrop = styled.div<{ color: string }>`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  opacity: 0.9;
  z-index: ${Z_HEIGHTS.BACKDROP};
`;
