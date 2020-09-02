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
    setCurrentPickConfirmModal: (modalInfo: PickConfirmModal) => void;
  }
}

export const PICKCONFIRM_MODAL_INITIAL_VALUE: PickConfirmModal = {
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

export const PICKCONFIRM_MODAL_DEFAULT_VALUE: PickConfirmContextInterface = {
  modal: PICKCONFIRM_MODAL_INITIAL_VALUE,
  setCurrentPickConfirmModal: () => {},
};

export const PickConfirmModalContext = React.createContext<
  PickConfirmContextInterface
>(PICKCONFIRM_MODAL_DEFAULT_VALUE);
