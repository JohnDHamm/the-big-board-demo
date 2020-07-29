import React from 'react';
import {
  Content,
  ContentItem,
  Page,
  Logo,
  SignIn,
  TopBlock,
} from './HomePage.styles';
import { Input, Select } from '../../components';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';
import { getLeaguesList, login } from '../../api';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const [leagues, setLeagues] = React.useState<LeagueListItem[]>([]);
  const [selectedLeague, setSelectedLeague] = React.useState<string>('');
  const [showNameInput, setShowNameInput] = React.useState<boolean>(false);
  const [showPasswordInput, setShowPasswordInput] = React.useState<boolean>(
    false
  );
  const [showLoginBtn, setShowLoginBtn] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

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
    // console.log('league[0].id', league[0].id);
    setSelectedLeague(league[0].id);
    setShowNameInput(true);
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
    console.log('name', name);
    setShowPasswordInput(name.length > 0);
  }, [name]);

  React.useEffect(() => {
    setShowLoginBtn(password.length > 0);
  }, [password]);

  React.useEffect(() => {
    initLeagues();
  }, []);

  return (
    <Page>
      <TopBlock>
        <Logo>THE BIG BOARD</Logo>
      </TopBlock>
      <Content>
        <SignIn>SIGN IN</SignIn>
        {leagues && <ContentItem>{renderSelect()}</ContentItem>}
        {showNameInput && (
          <ContentItem>
            <Input
              type="text"
              placeholder="Name"
              onTextChange={(text) => setName(text)}
            />
          </ContentItem>
        )}
        {showPasswordInput && (
          <ContentItem>
            <Input
              type="password"
              placeholder="Password"
              onTextChange={(text) => setPassword(text)}
            />
          </ContentItem>
        )}
        {showLoginBtn && <button onClick={() => userLogin()}>login</button>}
      </Content>
    </Page>
  );
};

export default HomePage;
