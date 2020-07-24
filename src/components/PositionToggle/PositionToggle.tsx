import React from 'react';
import {
  Container,
  PositionCircle,
  PositionText,
} from './PositionToggle.styles';

interface Props {
  onPositionsToggle: (positions: NFL_Position[]) => void;
  positions: NFL_Position[];
  selectedPositions: NFL_Position[];
}

const PositionToggle: React.FC<Props> = ({
  onPositionsToggle,
  positions,
  selectedPositions,
}) => {
  const [selected, setSelected] = React.useState<NFL_Position[]>(
    selectedPositions
  );

  const handleToggle = (position: NFL_Position) => {
    const updateArray = Array.from(selected);
    if (selected.includes(position)) {
      const idx = updateArray.indexOf(position);
      updateArray.splice(idx, 1);
    } else {
      updateArray.push(position);
    }
    if (updateArray.length > 0) {
      setSelected(updateArray);
      onPositionsToggle(updateArray);
    }
  };

  const renderToggles = () => {
    return positions.map((position) => {
      const isSelected: boolean = selected.includes(position);
      return (
        <PositionCircle
          key={position}
          onClick={() => handleToggle(position)}
          selected={isSelected}
          position={position}
        >
          <PositionText selected={isSelected}>{position}</PositionText>
        </PositionCircle>
      );
    });
  };

  return <Container>{renderToggles()}</Container>;
};

export default PositionToggle;
