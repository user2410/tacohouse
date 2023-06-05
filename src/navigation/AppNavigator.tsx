import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import SplashScreen from '@screens/Splash';
import React from 'react';
import MainNavigator from './MainNavigator';
import ListingNavigator from './ListingNavigator';

export type AppStackParamList = {
  Login: undefined;
  MainNav: undefined;
  Splash: undefined;
  Register: undefined;
  ListingNav: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export default function AppNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainNav" component={MainNavigator} />
        <Stack.Screen name="ListingNav" component={ListingNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
