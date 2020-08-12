import React from 'react';
import CloseIcon from './CloseIcon';
import { componentPathHelper } from '../../storybook';
import { COLORS } from '../../styles';

export default {
  title: componentPathHelper('CloseIcon'),
  component: CloseIcon,
};

const Wrapper: React.FC = ({ children }) => (
  <div
    style={{
      width: '20px',
      backgroundColor: 'lightgrey',
      padding: '0.25rem 0.25rem 0 0.25rem ',
    }}
  >
    {children}
  </div>
);

export const Default = () => (
  <Wrapper>
    <CloseIcon />
  </Wrapper>
);

export const CustomColor = () => (
  <Wrapper>
    <CloseIcon color={COLORS.PRIMARY_GREEN} />
  </Wrapper>
);
