import React from 'react';
import { COLORS } from '../../styles';

interface Props {
  fillColor?: string;
  strokeColor?: string;
}

const DropdownIcon: React.FC<Props> = ({
  fillColor = COLORS.WHITE,
  strokeColor = COLORS.PRIMARY_GREEN,
}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21.3 18.35"
    >
      <polygon
        style={{ fill: fillColor, stroke: strokeColor, strokeMiterlimit: 10 }}
        points="0.87 0.5 20.43 0.5 10.65 17.35 0.87 0.5"
      />
    </svg>
  );
};

export default DropdownIcon;
