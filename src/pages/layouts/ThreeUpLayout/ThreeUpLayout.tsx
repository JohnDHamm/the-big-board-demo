import React from 'react';
import {
  CenterContent,
  Container,
  LeftContent,
  RightContent,
} from './ThreeUpLayout.styles';

interface Props {
  left: JSX.Element;
  center: JSX.Element;
  right: JSX.Element;
}

const ThreeUpLayout: React.FC<Props> = ({ left, center, right }) => {
  return (
    <Container>
      <LeftContent>{left}</LeftContent>
      <CenterContent>{center}</CenterContent>
      <RightContent>{right}</RightContent>
    </Container>
  );
};

export default ThreeUpLayout;
