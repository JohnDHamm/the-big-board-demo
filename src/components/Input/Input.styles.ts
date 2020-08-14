import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

const Box = styled.div`
  height: 32px;
  max-width: 400px;
  padding-left: 0.5rem;
  display: flex;
  flex: 1;
  align-items: center;
`;

export const TitleBlock = styled(Box)`
  padding-right: 0.5rem;
`;

export const TitleText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const InputBox = styled(Box)`
  border: 1px solid ${COLORS.SECONDARY_GRAY};
`;

export const StyledInput = styled.input`
  width: 97%;
  font-family: ${FONTS.NAMES};
  font-size: 1.25rem;
  color: ${COLORS.PRIMARY_GREEN};
  border: none;
  outline: none;
`;
