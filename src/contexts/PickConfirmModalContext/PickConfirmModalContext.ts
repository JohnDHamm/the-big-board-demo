import React from 'react';

declare global {
  interface PickConfirmModal {
    visible: boolean;
    player: {
      position: string;
      name: string;
    };
    team: {
      abbv: string;
      colors: {
        primary: string;
        secondary: string;
      };
    };
    onCancel: () => void;
    onConfirm: () => void;
  }

  interface PickConfirmContextInterface {
    modal: PickConfirmModal;
    setCurrentModal: (modalInfo: PickConfirmModal) => void;
  }
}

export const MODAL_INITIAL_VALUE: PickConfirmModal = {
  visible: false,
  player: {
    position: '',
    name: '',
  },
  team: {
    colors: {
      primary: '',
      secondary: '',
    },
    abbv: '',
  },
  onCancel: () => null,
  onConfirm: () => null,
};

export const MODAL_DEFAULT_VALUE: PickConfirmContextInterface = {
  modal: MODAL_INITIAL_VALUE,
  setCurrentModal: () => {},
};

export const PickConfirmModalContext = React.createContext<
  PickConfirmContextInterface
>(MODAL_DEFAULT_VALUE);
