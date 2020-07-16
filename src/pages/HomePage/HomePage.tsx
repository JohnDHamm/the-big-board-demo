import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={ROUTES.APP}>
        <button>login</button>
      </Link>
    </div>
  );
};

export default HomePage;
