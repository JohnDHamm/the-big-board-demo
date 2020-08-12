import React from 'react';
import { MODAL_INITIAL_VALUE } from '../../contexts/PickIsInModalContext/PickIsInModalContext';

export const usePickIsInModal = (): PickIsInContextInterface => {
  const [pickIsInModal, setPickIsInModal] = React.useState<PickIsInModal>(
    MODAL_INITIAL_VALUE
  );

  const setCurrentPickIsInModal = React.useCallback(
    (currentModal: PickIsInModal): void => {
      setPickIsInModal(currentModal);
    },
    []
  );

  return { pickIsInModal, setCurrentPickIsInModal };
};
