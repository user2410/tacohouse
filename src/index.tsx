import React from 'react';
import AppNavigator from '@navigation/app.navigator';
import {PaperProvider} from 'react-native-paper';

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
