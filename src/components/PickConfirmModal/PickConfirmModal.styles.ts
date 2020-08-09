import styled from 'styled-components';
import { FONTS, COLORS, Z_HEIGHTS } from '../../styles';
import { NFL_TEAMS } from '../../assets/images';

export const Container = styled.div<{ color: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_HEIGHTS.MODAL};
  max-width: 400px;
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 1.5rem;
  color: ${COLORS.WHITE};
`;

export const NameBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Position = styled.p<{ color: string }>`
  margin: 0;
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2rem;
  color: ${(props) => props.color};
`;
export const Name = styled.p<{ color: string }>`
  margin: 0;
  padding-left: 0.5rem;
  font-family: ${FONTS.NAMES};
  font-size: 2rem;
  color: ${(props) => props.color};
`;

export const Logo = styled.div<{ team: string }>`
  width: 120px;
  height: 120px;
  background: url(${(props) => NFL_TEAMS[props.team]}) no-repeat;
  background-size: 100%;
`;

export const ButtonBlock = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  margin: 0 1rem;
`;
