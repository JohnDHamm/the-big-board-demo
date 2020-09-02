import React from 'react';
import { ButtonWrapper, CommishBlock, Welcome } from './MorePage.styles';
import { DraftStatusContext, UserContext } from '../../contexts';
import { Button } from '../../components';
import { startDraft } from '../../api';
import { ThreeUpLayout, MobileContentContainer } from '../layouts';

const MorePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const { draftStatus } = React.useContext(DraftStatusContext);

  const logout = (): void => {
    setCurrentUser(null);
  };

  const handleStartDraft = () => {
    console.log('starting draft');
    if (user) {
      startDraft(user?.leagueId, 'some message with start').then((res) =>
        console.log('res', res)
      );
    }
  };

  const pauseDraft = () => {
    console.log('pausing draft');
  };

  const openDraft = () => {
    console.log('open draft');
  };

  //TODO add Input for entering an optional message useState<string>

  return (
    <ThreeUpLayout
      left={<div></div>}
      center={
        <MobileContentContainer>
          <div onClick={() => logout()}>
            <Button label="log out" />
          </div>
          {user?.isCommish && (
            <CommishBlock>
              <Welcome>Hello Commish!</Welcome>
              {draftStatus === 'not started' && (
                <ButtonWrapper onClick={() => handleStartDraft()}>
                  <Button label="start draft" />
                </ButtonWrapper>
              )}
              {draftStatus === 'open' && (
                <ButtonWrapper onClick={() => pauseDraft()}>
                  <Button label="pause draft" />
                </ButtonWrapper>
              )}
              {draftStatus === 'paused' && (
                <ButtonWrapper onClick={() => openDraft()}>
                  <Button label="re-open draft" />
                </ButtonWrapper>
              )}
            </CommishBlock>
          )}
        </MobileContentContainer>
      }
      right={<div></div>}
    />
  );
};

export default MorePage;
