import * as React from 'react';
import { AppContainer } from './src/navigation';
import { Provider } from './src/context/AppContext';
import { disableFontScaling } from './config';

disableFontScaling();

const App = () => {
  return (
    <Provider>
      <AppContainer />
    </Provider>
  );
};

export default App;
