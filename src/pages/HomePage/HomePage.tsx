import React from 'react';
import {
  BtnBlock,
  Content,
  ContentItem,
  ErrorMsg,
  Page,
  LoadingMsg,
  Logo,
  SignIn,
  TopBlock,
} from './HomePage.styles';
import { Button, Input, Select } from '../../components';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { UserContext } from '../../contexts';
import { getLeaguesList, login } from '../../api';
import { socket } from '../../sockets/SocketListener/SocketListener';
import isEmpty from 'lodash.isempty';

const HomePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const history = useHistory();

  const [leagues, setLeagues] = React.useState<LeagueListItem[]>([]);
  const [selectedLeagueId, setSelectedLeagueId] = React.useState<string>('');
  const [showNameInput, setShowNameInput] = React.useState<boolean>(false);
  const [showPasswordInput, setShowPasswordInput] = React.useState<boolean>(
    false
  );
  const [showLoginBtn, setShowLoginBtn] = React.useState<boolean>(false);
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [errorMsg, setErrorMsg] = React.useState<string>('');

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
    setSelectedLeagueId(league[0]._id);
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
    if (selectedLeagueId) {
      const newUser: UserLogin = {
        name,
        password,
        leagueId: selectedLeagueId,
      };
      try {
        const loggedInUser: User = await login(newUser);
        if (loggedInUser) {
          setCurrentUser(loggedInUser);
          socket.emit('JoinRoom', loggedInUser.leagueId);
          history.push(ROUTES.APP);
        }
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
  };

  React.useEffect(() => {
    // console.log('user', user);
  }, [user]);

  React.useEffect(() => {
    // console.log('name', name);
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
        {isEmpty(leagues) ? (
          <LoadingMsg>Loading leagues...</LoadingMsg>
        ) : (
          <ContentItem>{renderSelect()}</ContentItem>
        )}
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
        {showLoginBtn && (
          <BtnBlock onClick={() => userLogin()}>
            <Button label="sign in" />
          </BtnBlock>
        )}
        {!isEmpty(errorMsg) && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </Content>
    </Page>
  );
};

export default HomePage;
