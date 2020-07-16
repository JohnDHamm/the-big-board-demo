import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const AppLoadingPage: React.FC = () => {
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
