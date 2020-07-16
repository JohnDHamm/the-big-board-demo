import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { PlayersContext } from '../../contexts';

const AppLoadingPage: React.FC = () => {
  const { players } = React.useContext(PlayersContext);

  React.useEffect(() => {
    console.log('players', players);
  }, [players]);

  return (
    <div>
      <h1>loading data...</h1>
      <Link to={ROUTES.BOARD}>
        <button>data is loaded</button>
      </Link>
    </div>
  );
};

export default AppLoadingPage;
