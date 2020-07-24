import React from 'react';
import { Container, SortCircle, SortText } from './SortToggle.styles';
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
        <SortCircle
          key={sortType}
          onClick={() => handleToggle(sortType)}
          selected={isSelected}
        >
          <SortText selected={isSelected}>{sortType}</SortText>
        </SortCircle>
      );
    });
  };

  return <Container>{renderToggles()}</Container>;
};

export default SortToggle;
