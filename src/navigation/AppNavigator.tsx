import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';
import SplashScreen from '@screens/Splash';
import HomeScreen from '@screens/Home';
import GettingStartedScreen from '@screens/GettingStarted';
import RegisterScreen from '@screens/Register';
import MainNavigator from './MainNavigator';

export type AppStackParamList = {
  GettingStarted: undefined;
  MainNav: undefined;
  Splash: undefined;
  Register: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export default function AppNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="GettingStarted"
          component={GettingStartedScreen}
          options={{headerTitle: 'Getting Started'}}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="MainNav"
          component={MainNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
