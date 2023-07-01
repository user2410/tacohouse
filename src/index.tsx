import React from 'react';
import AppNavigator from '@navigation/app.navigator';
import {PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';

export default function App(): JSX.Element {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
