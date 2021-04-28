import * as React from 'react';
import AppContext from '../context/AppContext';

export function useWeather() {
  const {
    state: { weather },
  } = React.useContext(AppContext);

  return weather;
}
