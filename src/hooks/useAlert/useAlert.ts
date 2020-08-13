import React from 'react';

export const useAlert = (): AlertContextInterface => {
  const [alert, setAlert] = React.useState<Alert>(null);

  const setCurrentAlert = React.useCallback((currentAlert: Alert): void => {
    setAlert(currentAlert);
  }, []);

  return { alert, setCurrentAlert };
};
