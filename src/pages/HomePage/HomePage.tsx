import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';
import { getLeaguesList, login } from '../../api';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const [leagues, setLeagues] = React.useState<LeagueListItem[]>([]);
  const [selectedLeague, setSelectedLeague] = React.useState<string>('');
  const [showInputs, setShowInputs] = React.useState<boolean>(true);

  const initLeagues = async () => {
    const leaguesList = await getLeaguesList();
    if (leaguesList) {
      setLeagues(leaguesList);
    }
  };

  const renderSelectOptions = (): JSX.Element[] => {
    const options = [
      <option key="select" value="">
        select your league
      </option>,
    ];
    leagues.forEach((league: LeagueListItem) => {
      options.push(
        <option key={league.id} value={league.id}>
          {league.name}
        </option>
      );
    });
    return options;
  };

  const renderSelect = (): JSX.Element => {
    return (
      <select
        onChange={(e) => setSelectedLeague(e.target.value)}
        value={selectedLeague}
      >
        {renderSelectOptions()}
      </select>
    );
  };

  const userLogin = async () => {
    // if (selectedLeague) {
    const testUser: UserLogin = {
      name: 'Richard',
      password: 'password',
      // leagueId: selectedLeague,
      leagueId: 'Nashville_Volleyball-1',
    };
    const loggedInUser: User = await login(testUser);
    setCurrentUser(loggedInUser);
    history.push(ROUTES.APP);
    // }
  };

  React.useEffect(() => {
    console.log('user', user);
  }, [user]);

  React.useEffect(() => {
    // setShowInputs(selectedLeague.length > 0);
  }, [selectedLeague]);

  React.useEffect(() => {
    initLeagues();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {leagues && renderSelect()}
      {showInputs && (
        <div>
          <p>name: John</p>
          <p>password: password</p>
          <button onClick={() => userLogin()}>login</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
