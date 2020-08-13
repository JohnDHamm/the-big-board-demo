import React from 'react';

declare global {
  type Alert = string | null;
  interface AlertContextInterface {
    alert: Alert;
    setCurrentAlert: (alert: Alert) => void;
  }
}

export const ALERT_DEFAULT_VALUE: AlertContextInterface = {
  alert: null,
  setCurrentAlert: () => {},
};

export const AlertContext = React.createContext<AlertContextInterface>(
  ALERT_DEFAULT_VALUE
);
