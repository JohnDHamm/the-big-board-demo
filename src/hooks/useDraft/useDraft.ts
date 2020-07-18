import React from 'react';
import { mockDraft } from '../../contexts/DraftContext/DraftContext';

export const useDraft = (): DraftContextInterface => {
  const [draft, setDraft] = React.useState<Draft>(mockDraft);

  const setCurrentDraft = React.useCallback((currentDraft: Draft): void => {
    setDraft(currentDraft);
  }, []);

  return { draft, setCurrentDraft };
};
