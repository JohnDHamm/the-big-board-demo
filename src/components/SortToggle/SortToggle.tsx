import React from 'react';
import { Container, FootballContainer, SortText } from './SortToggle.styles';
import Football from '../Football/Football';
import { COLORS } from '../../styles';

interface Props {
  onSortToggle: (sortType: string) => void;
  sortTypes: string[];
  selectedSortType: string;
}

const SortToggle: React.FC<Props> = ({
  onSortToggle,
  sortTypes,
  selectedSortType,
}) => {
  const [selected, setSelected] = React.useState<string>(selectedSortType);

  const handleToggle = (sortType: string) => {
    setSelected(sortType);
    onSortToggle(sortType);
  };

  const renderToggles = () => {
    return sortTypes.map((sortType) => {
      const isSelected: boolean = selected.includes(sortType);
      return (
        <FootballContainer
          key={sortType}
          onClick={() => handleToggle(sortType)}
        >
          <Football
            fillColor={isSelected ? COLORS.PRIMARY_GREEN : COLORS.WHITE}
            outlineColor={isSelected ? COLORS.BLACK : COLORS.DISABLED_GRAY}
          >
            <SortText selected={isSelected}>{sortType}</SortText>
          </Football>
        </FootballContainer>
      );
    });
  };

  return <Container>{renderToggles()}</Container>;
};

export default SortToggle;
