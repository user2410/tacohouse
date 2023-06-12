import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import SplashScreen from '@screens/Splash';
import React from 'react';
import MainNavigator from './MainNavigator';
import RoomSection from '@components/RoomSection';
import InvoiceSection from '@components/InvoiceSection';

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
      <Stack.Navigator
        initialRouteName="MainNav"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainNav" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
