import React from 'react';
import { MODAL_INITIAL_VALUE } from '../../contexts/PickConfirmModalContext/PickConfirmModalContext';

export const usePickConfirmModal = (): PickConfirmContextInterface => {
  const [modal, setModal] = React.useState<PickConfirmModal>(
    MODAL_INITIAL_VALUE
  );

  const setCurrentModal = React.useCallback(
    (currentModal: PickConfirmModal): void => {
      setModal(currentModal);
    },
    []
  );

  return { modal, setCurrentModal };
};
