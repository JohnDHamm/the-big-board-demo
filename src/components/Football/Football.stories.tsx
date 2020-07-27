import React from 'react';
import Football from './Football';
import { componentPathHelper } from '../../storybook';
import { FONTS } from '../../styles';

export default {
  title: componentPathHelper('Football'),
  component: Football,
};

const Container: React.FC = ({ children }) => (
  <div style={{ width: '62px', padding: '2rem', backgroundColor: 'lightgrey' }}>
    {children}
  </div>
);

const Text = () => (
  <p
    style={{
      margin: '0',
      fontFamily: FONTS.BLOCKLETTER,
      fontSize: '1.75rem',
      color: 'red',
    }}
  >
    QB
  </p>
);

export const Default = () => (
  <Container>
    <Football>
      <Text />
    </Football>
  </Container>
);
export const CustomColors = () => (
  <Container>
    <Football outlineColor="blue" fillColor="yellow" />
  </Container>
);
