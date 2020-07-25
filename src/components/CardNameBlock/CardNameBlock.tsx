import React from 'react';
import { Container, FirstName, LastName } from './CardNameBlock.styles';
import { formatLastName } from '../../functions';

interface Props {
  firstName: string;
  lastName: string;
}

const CardNameBlock: React.FC<Props> = ({ firstName, lastName }) => {
  return (
    <Container>
      <FirstName>{firstName}</FirstName>
      <LastName>{formatLastName(lastName)}</LastName>
    </Container>
  );
};

export default CardNameBlock;
