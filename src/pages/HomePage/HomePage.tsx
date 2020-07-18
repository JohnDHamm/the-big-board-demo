import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';
import { getLeaguesList } from '../../api';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const [leagues, setLeagues] = React.useState<LeagueListItem>([]);
  const [selectedLeague, setSelectedLeague] = React.useState<string>('');
  const [showInputs, setShowInputs] = React.useState<boolean>(false);

  const initLeagues = async () => {
    const leaguesList = await getLeaguesList();
    console.log('leaguesList', leaguesList);
    if (leaguesList) {
      setLeagues(leaguesList);
    }
  };

  const selectLeague = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLeague(e.target.value);
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
      <select onChange={selectLeague} value={selectedLeague}>
        {renderSelectOptions()}
      </select>
    );
  };

  const login = (): void => {
    const testUser: User = {
      id: 'TestUser-SomeLeague-1',
      name: 'Testy Mac',
      isCommish: true,
      leagueId: 'NashvilleVolleyball-1',
    };
    setCurrentUser(testUser);
    history.push(ROUTES.APP);
  };

  React.useEffect(() => {
    console.log('user', user);
  }, [user]);

  React.useEffect(() => {
    console.log('selectedLeague', selectedLeague);
    setShowInputs(selectedLeague.length > 0);
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
          <p>name</p>
          <p>password</p>
          <button onClick={() => login()}>login</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
