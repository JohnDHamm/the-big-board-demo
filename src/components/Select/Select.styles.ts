import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

const Box = styled.div`
  height: 32px;
  max-width: 400px;
  padding-left: 0.5rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBlock = styled(Box)`
  border-style: none;
`;

export const TitleText = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${COLORS.PRIMARY_GREEN};
`;

export const SelectBox = styled(Box)`
  border: 1px solid ${COLORS.PRIMARY_GREEN};
`;

export const SelectBoxText = styled.p<{ hasSelection: boolean }>`
  margin: 0;
  font-family: ${(props) =>
    props.hasSelection ? FONTS.NAMES : FONTS.BLOCKLETTER};
  font-size: 1.25rem;
  color: ${(props) =>
    props.hasSelection ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
`;

export const IconBlock = styled.div`
  width: 10px;
  padding-right: 0.5rem;
`;

export const OptionBox = styled(Box)`
  border: 1px solid ${COLORS.SECONDARY_GRAY};
  font-family: ${FONTS.NAMES};
  font-size: 1.25rem;
  color: ${COLORS.SECONDARY_GRAY};

  &:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.PRIMARY_GREEN};
  }
`;
