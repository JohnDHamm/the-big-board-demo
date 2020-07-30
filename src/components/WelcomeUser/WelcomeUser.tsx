import React from 'react';
import { Container, Name, WelcomeText } from './WelcomeUser.styles';

interface Props {
  name: string;
}

const WelcomeUser: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <WelcomeText>WELCOME BACK,</WelcomeText>
      <Name>{name}</Name>
    </Container>
  );
};

export default WelcomeUser;
