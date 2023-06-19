import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/Register';
import SplashScreen from '@screens/Splash';
import React from 'react';
import MainNavigator from './MainNavigator';
import RoomSection from '@screens/Room/RoomSection';
import InvoiceSection from '@screens/Invoice/InvoiceSection';
import { SingleRoom } from '@screens/Room/SingleRoom';
import CreateRoom from '@screens/Room/CreateRoom';
import CreateTenant from '@screens/Tenant/CreateTenant';
import SingleTenant from '@screens/Tenant/SingleTenant';

export type AppStackParamList = {
  Login: undefined;
  MainNav: undefined;
  Splash: undefined;
  Register: undefined;
  SingleRoom: undefined;
  CreateRoom: undefined;
  SingleTenant: undefined;
  CreateTenant: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export default function AppNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="MainNav" component={MainNavigator} />

        <Stack.Screen name='SingleRoom' component={SingleRoom} />
        <Stack.Screen
          options={{
            title: "Create new room",
            headerShown: true,
            headerTitleAlign: 'center',
          }}
          name='CreateRoom' component={CreateRoom}
        />

        <Stack.Screen name='SingleTenant' component={SingleTenant} />
        <Stack.Screen
          options={{
            title: "Create new tenant",
            headerShown: true,
            headerTitleAlign: 'center',
          }}
          name='CreateTenant' component={CreateTenant}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
