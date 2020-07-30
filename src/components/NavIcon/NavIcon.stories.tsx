import React from 'react';
import NavIcon from './NavIcon';
import { componentPathHelper } from '../../storybook';
import { COLORS } from '../../styles';

export default {
  title: componentPathHelper('NavIcon'),
  component: NavIcon,
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
    <NavIcon />
  </Wrapper>
);

export const CustomColor = () => (
  <Wrapper>
    <NavIcon color={COLORS.PRIMARY_GREEN} />
  </Wrapper>
);
