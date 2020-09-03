import React from 'react';
import {
  ChildrenContainer,
  ControlButton,
  Label,
  TopContainer,
} from './Accordion.styles';
import DropdownIcon from '../DropdownIcon/DropdownIcon';
import { COLORS } from '../../styles';

interface Props {
  label: string;
}

const Accordion: React.FC<Props> = ({ children, label }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  return (
    <div>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <TopContainer>
          <Label>{label}</Label>
          <ControlButton isExpanded={isExpanded}>
            <DropdownIcon strokeColor={COLORS.BLACK} />
          </ControlButton>
        </TopContainer>
      </div>
      <ChildrenContainer isExpanded={isExpanded}>{children}</ChildrenContainer>
    </div>
  );
};

export default Accordion;
