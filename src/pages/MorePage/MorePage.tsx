import React from 'react';
import { ButtonWrapper, CommishBlock, Welcome } from './MorePage.styles';
import { DraftStatusContext, UserContext } from '../../contexts';
import { Button, Input } from '../../components';
import { pauseDraft, reopenDraft, startDraft } from '../../api';
import { ThreeUpLayout, MobileContentContainer } from '../layouts';

const MorePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const { draftStatus } = React.useContext(DraftStatusContext);
  const [message, setMessage] = React.useState<string>('');

  const logout = (): void => {
    setCurrentUser(null);
  };

  const handleStartDraft = () => {
    if (user) {
      startDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handlePauseDraft = () => {
    if (user) {
      pauseDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handleReopenDraft = () => {
    if (user) {
      reopenDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

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
              <Input
                placeholder="add message"
                type="text"
                onTextChange={(text) => setMessage(text)}
              />
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
