import React from 'react';
import {
  Container,
  LogoContainer,
  LogoLink,
  Tab,
  TabsContainer,
  TabLink,
  TextLogo,
} from './NavBar.styles';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes';

interface Props {
  disabled?: boolean;
}

const NavBar: React.FC<Props> = ({ disabled = false }) => {
  const location = useLocation();
  const [path, setPath] = React.useState<string>('');

  React.useEffect(() => {
    if (location) {
      setPath(location.pathname);
    }
  }, [location]);

  return (
    <div>
      {disabled ? (
        <Container>
          <LogoContainer>
            <TextLogo active={false}>The Big Board</TextLogo>
          </LogoContainer>
          <TabsContainer>
            <Tab active={false}>Players</Tab>
            <Tab active={false}>My Team</Tab>
            <Tab active={false}>More</Tab>
          </TabsContainer>
        </Container>
      ) : (
        <Container>
          <LogoContainer>
            <LogoLink to={ROUTES.BOARD}>
              <TextLogo active={path === ROUTES.BOARD}>The Big Board</TextLogo>
            </LogoLink>
          </LogoContainer>
          <TabsContainer>
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
      )}
    </div>
  );
};

export default NavBar;
