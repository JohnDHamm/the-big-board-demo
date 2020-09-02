import React from 'react';

declare global {
  interface CommishModal {
    visible: boolean;
    status: string;
    message: string;
    onActionCall: () => void;
  }

  interface CommishModalContextInterface {
    commishModal: CommishModal;
    setCurrentCommishModal: (modalInfo: CommishModal) => void;
  }
}

export const COMMISH_MODAL_INITIAL_VALUE: CommishModal = {
  visible: false,
  status: '',
  message: '',
  onActionCall: () => null,
};

export const COMMISH_MODAL_DEFAULT_VALUE: CommishModalContextInterface = {
  commishModal: COMMISH_MODAL_INITIAL_VALUE,
  setCurrentCommishModal: () => {},
};

export const CommishModalContext = React.createContext<
  CommishModalContextInterface
>(COMMISH_MODAL_DEFAULT_VALUE);
