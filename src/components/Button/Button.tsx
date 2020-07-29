import React from 'react';
import { Container, Label } from './Button.styles';

interface Props {
  label: string;
  width?: string;
}

const Button: React.FC<Props> = ({ label, width }) => {
  return (
    <Container width={width}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
