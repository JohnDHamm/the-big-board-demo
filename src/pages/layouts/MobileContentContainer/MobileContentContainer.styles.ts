import styled from 'styled-components';
import { SCREEN_WIDTHS } from '../../../styles';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 1rem;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    width: 95%;
  }
`;
