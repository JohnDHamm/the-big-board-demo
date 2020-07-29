import React from 'react';
import { Content, Page, Logo, TopBlock } from './HomePage.styles';
import { Select } from '../../components';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';
import { getLeaguesList, login } from '../../api';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const [leagues, setLeagues] = React.useState<LeagueListItem[]>([]);
  const [selectedLeague, setSelectedLeague] = React.useState<string>(''); //leagueId
  const [showInputs, setShowInputs] = React.useState<boolean>(false);

  const initLeagues = async () => {
    const leaguesList = await getLeaguesList();
    if (leaguesList) {
      setLeagues(leaguesList);
    }
  };

  const getSelectOptions = (): string[] => {
    const options: string[] = [];
    leagues.forEach((league: LeagueListItem) => {
      options.push(league.name);
    });
    return options;
  };

  const handleSelectChange = (option: string) => {
    const league = leagues.filter((league) => league.name === option);
    console.log('league[0].id', league[0].id);
    setSelectedLeague(league[0].id);
    setShowInputs(true);
  };

  const renderSelect = (): JSX.Element => {
    return (
      <Select
        onSelect={(option) => handleSelectChange(option)}
        options={getSelectOptions()}
      />
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
    <Page>
      <TopBlock>
        <Logo>THE BIG BOARD</Logo>
      </TopBlock>
      <Content>
        {leagues && renderSelect()}
        {showInputs && (
          <div>
            <p style={{ fontFamily: 'PT Sans Narrow' }}>name: John</p>
            <p style={{ fontFamily: 'PT Sans Narrow' }}>password: password</p>
            <button onClick={() => userLogin()}>login</button>
          </div>
        )}
      </Content>
    </Page>
  );
};

export default HomePage;
