import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/login/login.screen';
import RegisterScreen from '@screens/register/register.screen';
import SplashScreen from '@screens/splash/splash.screen';
import React from 'react';
import ManageAppNavigator from './manage-app/manage-app.navigator';
import ListingAppNavigator from './listing-app/listing-app.navigator';

export type AppStackParamList = {
  Login: undefined;
  ManageAppNav: undefined;
  Splash: undefined;
  Register: undefined;
  ListingAppNav: undefined;
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
        <Stack.Screen name="ManageAppNav" component={ManageAppNavigator} />
        <Stack.Screen name="ListingAppNav" component={ListingAppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
