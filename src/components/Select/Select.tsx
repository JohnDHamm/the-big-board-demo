import React from 'react';
import { OptionBox, SelectBox, SelectBoxText } from './Select.styles';

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
      <SelectBox onClick={() => setShowOptions(!showOptions)}>
        <SelectBoxText hasSelection={selection !== null}>
          {selection || 'SELECT LEAGUE'}
        </SelectBoxText>
        <div style={{ transform: 'rotate(90deg)', paddingRight: '0.5rem' }}>
          {'>'}
        </div>
      </SelectBox>
      {showOptions && renderOptions()}
    </div>
  );
};

export default Select;
