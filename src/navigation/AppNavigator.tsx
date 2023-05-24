import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import SplashScreen from '@screens/Splash';
import React from 'react';
import MainNavigator from './MainNavigator';

export type AppStackParamList = {
  Login: undefined;
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
          name="Login"
          component={LoginScreen}
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
