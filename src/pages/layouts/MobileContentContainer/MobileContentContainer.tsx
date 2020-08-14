import React from 'react';
import { Container } from './MobileContentContainer.styles';

const MobileContentContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MobileContentContainer;
