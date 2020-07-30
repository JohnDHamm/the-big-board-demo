import React from 'react';
import { COLORS } from '../../styles';

interface Props {
  color?: string;
}

const NavIcon: React.FC<Props> = ({ color = COLORS.WHITE }) => {
  return (
    <svg viewBox="0 0 12.39 22.77">
      <path
        style={{ fill: color }}
        d="M138.66,155.54a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.68-9.68L138,134.47a1,1,0,0,1,0-1.41,1,1,0,0,1,1.42,0l10.38,10.39a1,1,0,0,1,.29.7,1,1,0,0,1-.29.71l-10.38,10.39A1,1,0,0,1,138.66,155.54Z"
        transform="translate(-137.66 -132.77)"
      />
    </svg>
  );
};

export default NavIcon;
