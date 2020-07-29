import React from 'react';
import { InputBox, StyledInput, TitleBlock, TitleText } from './Input.styles';

interface Props {
  placeholder: string;
  onTextChange: (text: string) => void;
  type: 'text' | 'password';
}

const Input: React.FC<Props> = ({ placeholder, onTextChange, type }) => {
  const [text, setText] = React.useState<string>('');

  const handleTextChange = (text: string) => {
    setText(text);
    onTextChange(text);
  };
  return (
    <>
      <TitleBlock>
        {text.length > 0 && <TitleText>{placeholder}</TitleText>}
      </TitleBlock>
      <InputBox>
        <StyledInput
          type={type}
          placeholder={placeholder}
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
        />
      </InputBox>
    </>
  );
};

export default Input;
