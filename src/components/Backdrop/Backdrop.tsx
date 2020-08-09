import React from 'react';
import { StyledBackdrop } from './Backdrop.styles';
import { COLORS } from '../../styles';
interface Props {
  color?: string;
}

const Backdrop: React.FC<Props> = ({ color = COLORS.BLACK }) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <StyledBackdrop color={color} />
    </div>
  );
};

export default Backdrop;
