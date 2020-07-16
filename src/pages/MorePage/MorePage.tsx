import React from 'react';
import { UserContext } from '../../contexts';

const MorePage: React.FC = () => {
  const { setCurrentUser } = React.useContext(UserContext);

  const logout = (): void => {
    setCurrentUser({
      id: '',
      name: '',
      commish: false,
    });
  };

  return (
    <div>
      <h1>other stuff</h1>
      <button onClick={() => logout()}>log out</button>
    </div>
  );
};

export default MorePage;
