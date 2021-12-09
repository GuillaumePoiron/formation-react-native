/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App/App';
import {name as appName} from './app.json';
import React from 'react';
import store from './src/App/store/store';
import {Provider} from 'react-redux';

AppRegistry.registerComponent(appName, () => ProvidedApp);

function ProvidedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
