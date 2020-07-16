import React from 'react';
import { mockUser } from '../../contexts/UserContext/UserContext';

export const useUser = (): UserContextInterface => {
  const [user, setUser] = React.useState<User>(mockUser);

  const setCurrentUser = React.useCallback((currentUser: User): void => {
    setUser(currentUser);
  }, []);

  return { user, setCurrentUser };
};
