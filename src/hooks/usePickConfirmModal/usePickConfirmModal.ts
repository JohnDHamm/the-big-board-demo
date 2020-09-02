import React from 'react';
import { PICKCONFIRM_MODAL_INITIAL_VALUE } from '../../contexts/PickConfirmModalContext/PickConfirmModalContext';

export const usePickConfirmModal = (): PickConfirmContextInterface => {
  const [modal, setModal] = React.useState<PickConfirmModal>(
    PICKCONFIRM_MODAL_INITIAL_VALUE
  );

  const setCurrentPickConfirmModal = React.useCallback(
    (currentModal: PickConfirmModal): void => {
      setModal(currentModal);
    },
    []
  );

  return { modal, setCurrentPickConfirmModal };
};
