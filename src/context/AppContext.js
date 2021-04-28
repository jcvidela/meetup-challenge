import * as React from 'react';
import { getFromStorage, removeFromStorage, saveOnStorage } from '../helpers';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLogged, setIsLogged] = React.useState({
    username: '',
    active: false,
    role: null,
  });

  function verifySession() {
    getFromStorage('session')
      .then((string) => JSON.parse(string))
      .then((session) =>
        setIsLogged({
          username: session.username,
          active: true,
          role: session.username.toUpperCase() === 'ADMIN' ? 'ADMIN' : 'GUEST',
        }),
      );
  }

  function setLoggedIn(formValues) {
    return new Promise((resolve, reject) => {
      saveOnStorage('session', JSON.stringify(formValues))
        .then(
          () =>
            setIsLogged({
              username: formValues.username,
              active: true,
              role: formValues.username.toUpperCase() === 'ADMIN' ? 'ADMIN' : 'GUEST',
            }),
          resolve(),
        )
        .catch((error) => reject(error));
    });
  }

  function setLoggedOut() {
    removeFromStorage('session').then(() =>
      setIsLogged({
        active: false,
        role: null,
      }),
    );
  }

  const state = {
    isLogged,
  };

  const actions = {
    setLoggedIn,
    setLoggedOut,
    verifySession,
  };

  return <AppContext.Provider value={{ state, actions }}>{children}</AppContext.Provider>;
};

export { AppContext as default, AppProvider as Provider };
