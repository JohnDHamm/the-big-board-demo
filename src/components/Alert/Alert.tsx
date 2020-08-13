import React from 'react';
import { Container, Message } from './Alert.styles';

interface Props {
  message: string | null;
}

const Alert: React.FC<Props> = ({ message }) => {
  return message ? (
    <Container>
      <Message>{message}</Message>
    </Container>
  ) : null;
};

export default Alert;
