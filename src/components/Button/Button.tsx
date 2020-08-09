import React from 'react';
import { Container, Label } from './Button.styles';

interface Props {
  label: string;
  width?: string;
  alternate?: boolean;
}

const Button: React.FC<Props> = ({ label, width, alternate = false }) => {
  return (
    <Container width={width} alternate={alternate}>
      <Label alternate={alternate}>{label}</Label>
    </Container>
  );
};

export default Button;
