import React from 'react';
import Accordion from './Accordion';
import { componentPathHelper } from '../../storybook';

export default {
  title: componentPathHelper('Accordion'),
  component: Accordion,
};

export const Default = () => (
  <div style={{ maxWidth: '400px' }}>
    <Accordion label="accordion label">
      <p>
        some children fsgjhsfg sghih gihgig wrighwrigwrhrw hirgh sfgkjg
        ssgjghwrkjgrwg rjghr
      </p>
    </Accordion>
  </div>
);
