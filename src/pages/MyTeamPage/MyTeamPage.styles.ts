import styled from 'styled-components';
import { SCREEN_WIDTHS, HEIGHTS } from '../../styles';
export const Page = styled.div`
  padding-top: calc(${HEIGHTS.NAVBAR_TABLET} + 1rem);
  padding-bottom: calc(${HEIGHTS.BOTTOM_TICKER});
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    padding-top: ${HEIGHTS.NAVBAR_MOBILE};
  }
`;
