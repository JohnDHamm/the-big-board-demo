import React from 'react';
import {
  Container,
  LogoContainer,
  MobileTabIcon,
  Tab,
  TabBlock,
  TabsContainer,
  TabLink,
  TextLogo,
} from './NavBar.styles';
import Logo from '../Logo/Logo';
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
            <Logo />
          </LogoContainer>
        </Container>
      ) : (
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <TabsContainer>
            <TabLink to={ROUTES.BOARD}>
              <TabBlock>
                <MobileTabIcon active={path === ROUTES.BOARD}>S</MobileTabIcon>
                <Tab active={path === ROUTES.BOARD}>Selections</Tab>
              </TabBlock>
            </TabLink>
            <TabLink to={ROUTES.PLAYERS}>
              <TabBlock>
                <MobileTabIcon active={path === ROUTES.PLAYERS}>
                  P
                </MobileTabIcon>
                <Tab active={path === ROUTES.PLAYERS}>Players</Tab>
              </TabBlock>
            </TabLink>
            <TabLink to={ROUTES.MY_TEAM}>
              <TabBlock>
                <MobileTabIcon active={path === ROUTES.MY_TEAM}>
                  T
                </MobileTabIcon>
                <Tab active={path === ROUTES.MY_TEAM}>My Team</Tab>
              </TabBlock>
            </TabLink>
            <TabLink to={ROUTES.MORE}>
              <TabBlock>
                <MobileTabIcon active={path === ROUTES.MY_TEAM}>
                  M
                </MobileTabIcon>
                <Tab active={path === ROUTES.MORE}>More</Tab>
              </TabBlock>
            </TabLink>
          </TabsContainer>
        </Container>
      )}
    </div>
  );
};

export default NavBar;
