import * as React from 'react';
import { getFromStorage, removeFromStorage, saveOnStorage } from '../helpers';
import { useFetch } from '../hooks/useFetch';

const AppContext = React.createContext();
const url = 'https://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,ar&appid=1db3d08995d69e48a381491aaec0fe7c&units=metric';

const AppProvider = ({ children }) => {
  const [isLogged, setIsLogged] = React.useState({
    username: '',
    active: false,
    role: null,
  });
  const [weather, setWeather] = React.useState({
    data: null,
    loading: true,
    error: false,
  });
  const { data, loading, error } = useFetch(url);

  React.useEffect(() => {
    if (data) {
      setWeather({
        data: {
          temp: data.main.temp,
          location: `${data.name}, ${data.sys.country}`,
          desc: data.weather[0].description,
        },
        loading: false,
        error: false,
      });
    } else if (error) {
      setWeather({
        data: null,
        loading: false,
        error: true,
      });
    }
  }, [data, error]);

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
    weather,
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
