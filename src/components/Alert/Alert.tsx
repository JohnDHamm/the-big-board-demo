import React from 'react';
import { Container, Message } from './Alert.styles';

interface Props {
  message: string | null;
  sticky?: boolean;
  type: AlertType;
}

const Alert: React.FC<Props> = ({ message, sticky = false, type }) => {
  return message ? (
    <Container sticky={sticky} type={type}>
      <Message>{message}</Message>
    </Container>
  ) : null;
};

export default Alert;
