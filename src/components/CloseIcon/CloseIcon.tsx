import React from 'react';
import { COLORS } from '../../styles';

interface Props {
  color?: string;
}

const CloseIcon: React.FC<Props> = ({ color = COLORS.WHITE }) => {
  return (
    <svg viewBox="0 0 21.47 21.47">
      <path
        style={{ fill: color }}
        d="M145.27,144.15l9-9a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-9,9-9-9a1,1,0,0,0-1.42,1.42l9,9-9,9a1,1,0,0,0,.71,1.71,1,1,0,0,0,.71-.3l9-9,9,9a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z"
        transform="translate(-133.12 -133.42)"
      />
    </svg>
  );
};

export default CloseIcon;
