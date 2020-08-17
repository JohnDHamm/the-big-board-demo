import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  padding-top: 3rem;
  text-align: center;
`;

export const Text = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${COLORS.SECONDARY_GRAY};
`;

export const LoadBlock = styled.div`
  padding-top: 2rem;
`;

export const LoadedText = styled(Text)<{ loaded?: boolean }>`
  color: ${(props) =>
    props.loaded ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
`;
