import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div<{ hasPick: boolean }>`
  display: flex;
  position: relative;
  height: 42px;
  max-width: 400px;
  margin: 4px 0;
  border-style: solid;
  border-width: ${(props) => (props.hasPick ? '0px' : '1px')};
  border-color: ${COLORS.DISABLED_GRAY};
  border-radius: 22px;
`;

export const PickNumBlock = styled.div<{ hasPick: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
  display: flex;
  border-radius: 21px;
  background-color: ${(props) =>
    props.hasPick ? COLORS.BLACK : COLORS.DISABLED_GRAY};
  justify-content: center;
  align-items: center;
`;

export const PickNum = styled.p<{ hasPick: boolean; isLarge: boolean }>`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER}, sans-serif;
  font-size: ${(props) => (props.isLarge ? '1.5rem' : '1.75rem')};
  color: ${(props) => (props.hasPick ? COLORS.PRIMARY_GREEN : COLORS.WHITE)};
`;

export const OwnerBlock = styled.div<{ hasPick: boolean }>`
  width: 35%;
  border-style: solid;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: ${(props) => (props.hasPick ? '1px' : '0px')};
  border-bottom-width: ${(props) => (props.hasPick ? '1px' : '0px')};
  border-radius: 21px 0 0 21px;
  border-color: ${(props) =>
    props.hasPick ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
`;

export const OwnerName = styled.p<{ hasPick: boolean }>`
  line-height: 42px;
  margin: 0;
  padding-left: 46px;
  font-family: ${FONTS.NAMES}, sans-serif;
  font-size: 1.5rem;
  color: ${(props) => (props.hasPick ? COLORS.BLACK : COLORS.DISABLED_GRAY)};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AccentStripe = styled.div<{ accentColor: string }>`
  width: 6px;
  background-color: ${(props) => props.accentColor};
`;

export const PlayerBlock = styled.div<{ bgColor: string }>`
  width: calc(65% - 6px);
  background-color: ${(props) => props.bgColor};
  border-radius: 0 21px 21px 0;
`;

export const PositionBlock = styled.div<{ position: NFL_Position }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 21px;
  border: 1px solid ${COLORS.PRIMARY_GREEN};
  background-color: ${(props) => COLORS.NFL_POSITIONS[props.position]};
`;

export const Position = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER}, sans-serif;
  font-size: 1.5rem;
  color: ${COLORS.WHITE};
`;
