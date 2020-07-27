import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 0.75rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FirstName = styled.p`
  margin-top: 0;
  margin-bottom: -0.4rem;
  font-family: ${FONTS.NAMES}, sans-serif;
  font-size: 12px;
  color: ${COLORS.WHITE};
`;

export const LastName = styled.p`
  margin-top: 0;
  margin-bottom: -0.2rem;
  font-family: ${FONTS.NAMES}, sans-serif;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${COLORS.WHITE};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
