import styled from 'styled-components';
import { FONTS, COLORS } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const WelcomeText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const Name = styled.p`
  margin: 0;
  padding-left: 0.5rem;

  font-family: ${FONTS.NAMES};
  font-size: 1.75rem;
  color: ${COLORS.WHITE};
`;
