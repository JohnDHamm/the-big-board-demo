import styled from 'styled-components';
import { COLORS } from '../../styles';

export const EmptySlot = styled.div`
  height: 42px;
  width: 100%;
  max-width: 400px;
  margin: 6px 0;
  border: 1px solid ${COLORS.PRIMARY_GREEN};
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  opacity: 0.75;
`;
