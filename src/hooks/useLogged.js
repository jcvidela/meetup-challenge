import * as React from 'react';
import AppContext from '../context/AppContext';

export function useLoggedIn() {
  const {
    state: { isLogged },
    actions: { setLoggedIn, setLoggedOut, verifySession },
  } = React.useContext(AppContext);

  return {
    isLogged,
    setLoggedIn,
    setLoggedOut,
    verifySession
  };
}