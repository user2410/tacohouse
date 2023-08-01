import React from 'react';
import AppNavigator from '@navigation/app.navigator';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '@store/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
