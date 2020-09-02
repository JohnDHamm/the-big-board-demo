import React from 'react';
import { COMMISH_MODAL_INITIAL_VALUE } from '../../contexts/CommishModalContext/CommishModalContext';

export const useCommishModal = (): CommishModalContextInterface => {
  const [commishModal, setCommishModal] = React.useState<CommishModal>(
    COMMISH_MODAL_INITIAL_VALUE
  );

  const setCurrentCommishModal = React.useCallback(
    (currentModal: CommishModal): void => {
      setCommishModal(currentModal);
    },
    []
  );

  return { commishModal, setCurrentCommishModal };
};
