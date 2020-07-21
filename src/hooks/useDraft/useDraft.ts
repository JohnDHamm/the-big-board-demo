import React from 'react';
import { DRAFT_INITIAL_VALUE } from '../../contexts/DraftContext/DraftContext';

export const useDraft = (): DraftContextInterface => {
  const [draft, setDraft] = React.useState<Draft>(DRAFT_INITIAL_VALUE);

  const setCurrentDraft = React.useCallback((currentDraft: Draft): void => {
    setDraft(currentDraft);
  }, []);

  return { draft, setCurrentDraft };
};
