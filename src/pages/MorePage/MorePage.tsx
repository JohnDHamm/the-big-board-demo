import React from 'react';
import { ButtonWrapper, CommishBlock, Welcome } from './MorePage.styles';
import { DraftStatusContext, UserContext } from '../../contexts';
import { Button } from '../../components';
import { pauseDraft, reopenDraft, startDraft } from '../../api';
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
      startDraft(user?.leagueId, 'some message with start')
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err));
    }
  };

  const handlePauseDraft = () => {
    console.log('pausing draft');
    if (user) {
      pauseDraft(user?.leagueId, 'pausing draft message')
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err));
    }
  };

  const handleReopenDraft = () => {
    console.log('open draft');
    if (user) {
      reopenDraft(user?.leagueId, 'message about re-opening draft')
        .then((res) => console.log('res', res))
        .catch((err) => console.log('err', err));
    }
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
                <ButtonWrapper onClick={() => handlePauseDraft()}>
                  <Button label="pause draft" />
                </ButtonWrapper>
              )}
              {draftStatus === 'paused' && (
                <ButtonWrapper onClick={() => handleReopenDraft()}>
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
