import React from 'react';
import {
  Container,
  LogoContainer,
  Tab,
  TabsContainer,
  TabLink,
  TextLogo,
} from './NavBar.styles';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [path, setPath] = React.useState<string>('');

  React.useEffect(() => {
    if (location) {
      setPath(location.pathname);
    }
  }, [location]);

  return (
    <Container>
      <LogoContainer>
        <TextLogo to={ROUTES.HOME}>The Big Board</TextLogo>
      </LogoContainer>
      <TabsContainer>
        <TabLink to={ROUTES.BOARD}>
          <Tab active={path === ROUTES.BOARD}>Board</Tab>
        </TabLink>
        <TabLink to={ROUTES.PLAYERS}>
          <Tab active={path === ROUTES.PLAYERS}>Players</Tab>
        </TabLink>
        <TabLink to={ROUTES.MY_TEAM}>
          <Tab active={path === ROUTES.MY_TEAM}>My Team</Tab>
        </TabLink>
        <TabLink to={ROUTES.MORE}>
          <Tab active={path === ROUTES.MORE}>More</Tab>
        </TabLink>
      </TabsContainer>
    </Container>
  );
};

export default NavBar;
