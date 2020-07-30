import React from 'react';
import { Container, Text, Toggle } from './HidePlayersToggle.styles';

interface Props {
  active: boolean;
  onToggle: () => void;
}

const HidePlayersToggle: React.FC<Props> = ({ active, onToggle }) => {
  const [toggleActive, setToggleActive] = React.useState<boolean>(active);

  const handleClick = () => {
    setToggleActive(!toggleActive);
    onToggle();
  };

  React.useEffect(() => {
    setToggleActive(active);
  }, [active]);

  return (
    <Container>
      <Toggle active={toggleActive} onClick={handleClick} />
      <Text>HIDE SELECTED PLAYERS</Text>
    </Container>
  );
};

export default HidePlayersToggle;
