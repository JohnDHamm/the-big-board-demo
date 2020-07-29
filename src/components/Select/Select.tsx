import React from 'react';
import {
  IconBlock,
  OptionBox,
  SelectBox,
  SelectBoxText,
  TitleBlock,
  TitleText,
} from './Select.styles';
import DropdownIcon from '../DropdownIcon/DropdownIcon';
import { COLORS } from '../../styles';

interface Props {
  options: string[];
  onSelect: (selection: string) => void;
}

const Select: React.FC<Props> = ({ options, onSelect }) => {
  const [selection, setSelection] = React.useState<string | null>(null);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelection(option);
    onSelect(option);
    setShowOptions(false);
  };

  const renderOptions = (): JSX.Element[] => {
    return options.map((option) => {
      return (
        <OptionBox key={option} onClick={() => handleSelect(option)}>
          {option}
        </OptionBox>
      );
    });
  };

  return (
    <div>
      <TitleBlock>
        <TitleText>{!selection || 'LEAGUE'}</TitleText>
      </TitleBlock>
      <SelectBox onClick={() => setShowOptions(!showOptions)}>
        <SelectBoxText hasSelection={selection !== null}>
          {selection || 'SELECT LEAGUE'}
        </SelectBoxText>
        <IconBlock>
          <DropdownIcon strokeColor={COLORS.SECONDARY_GRAY} />
        </IconBlock>
      </SelectBox>
      {showOptions && renderOptions()}
    </div>
  );
};

export default Select;
