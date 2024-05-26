/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {store, persist} from 'store/reducer';
import {PersistGate} from 'redux-persist/integration/react';

import {LoaderCom} from 'components';
import App from './src/app';
import {name as appName} from './app.json';

const app = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderCom type="screen" />} persistor={persist}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => app);
