import React from 'react';
import { DraftContext, PlayersContext } from '../../contexts';

const BoardPage: React.FC = () => {
  const { draft } = React.useContext(DraftContext);
  const { players } = React.useContext(PlayersContext);

  React.useEffect(() => {
    console.log('draft', draft);
    console.log('players', players);
  }, [draft, players]);

  return (
    <div>
      <h1>The Big Board</h1>
    </div>
  );
};

export default BoardPage;
