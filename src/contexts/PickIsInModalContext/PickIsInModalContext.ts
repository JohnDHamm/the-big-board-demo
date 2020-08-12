import React from 'react';

declare global {
  interface PickIsInModal {
    visible: boolean;
    selectionNumber: number;
    ownerName: string;
    player: {
      position: NFL_Position;
      firstName: string;
      lastName: string;
    };
    team: {
      abbv: string;
      colors: {
        primary: string;
        secondary: string;
      };
    };
  }

  interface PickIsInContextInterface {
    pickIsInModal: PickIsInModal;
    setCurrentPickIsInModal: (modalInfo: PickIsInModal) => void;
  }
}

export const MODAL_INITIAL_VALUE: PickIsInModal = {
  visible: false,
  selectionNumber: 0,
  ownerName: '',
  player: {
    position: 'QB',
    firstName: '',
    lastName: '',
  },
  team: {
    colors: {
      primary: '',
      secondary: '',
    },
    abbv: '',
  },
};

export const MODAL_DEFAULT_VALUE: PickIsInContextInterface = {
  pickIsInModal: MODAL_INITIAL_VALUE,
  setCurrentPickIsInModal: () => {},
};

export const PickIsInModalContext = React.createContext<
  PickIsInContextInterface
>(MODAL_DEFAULT_VALUE);
