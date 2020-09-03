import styled from 'styled-components';
import { FONTS, COLORS } from '../../styles';

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Label = styled.p`
  margin: 0;
  font-family: ${FONTS.NAMES};
  font-size: 1.5rem;
  color: ${COLORS.SECONDARY_GRAY};
  padding-right: 2rem;
`;

export const ControlButton = styled.div<{ isExpanded: boolean }>`
  width: 10px;
  transform: rotate(${(props) => (props.isExpanded ? '180deg' : '0deg')});
`;

export const ChildrenContainer = styled.div<{ isExpanded: boolean }>`
  display: ${(props) => (props.isExpanded ? 'block' : 'none')};
  padding: 0.25rem 0.5rem;
`;
