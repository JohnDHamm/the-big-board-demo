import React from 'react';
import { UserContext } from '../../contexts';
import { Button } from '../../components';
import { ThreeUpLayout, MobileContentContainer } from '../layouts';

const MorePage: React.FC = () => {
  const { setCurrentUser } = React.useContext(UserContext);

  const logout = (): void => {
    setCurrentUser(null);
  };

  return (
    <ThreeUpLayout
      left={<div></div>}
      center={
        <MobileContentContainer>
          <div onClick={() => logout()}>
            <Button label="log out" />
          </div>
        </MobileContentContainer>
      }
      right={<div></div>}
    />
  );
};

export default MorePage;
