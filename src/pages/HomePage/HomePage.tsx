import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const login = (): void => {
    const testUser: User = {
      id: 'TestUser-SomeLeague-1',
      name: 'Testy Mac',
      isCommish: true,
    };
    setCurrentUser(testUser);
    history.push(ROUTES.APP);
  };

  React.useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default HomePage;
