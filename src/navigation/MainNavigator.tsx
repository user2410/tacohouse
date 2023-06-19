import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeNavigator from './Home/HomeNavigator';
import SingleTenant from '@screens/Tenant/SingleTenant';
import {SingleRoom} from '@screens/Room/SingleRoom';
import CreateRoom from '@screens/Room/CreateRoom';
import InvoiceSection from '@screens/Invoice/InvoiceSection';
import TenantSection from '@screens/Tenant/TenantSection';

export type MainTabParamList = {
  HomeNav: undefined;
  Invoice: undefined;
  Tenant: undefined;
  Chat: undefined;
  Problem: undefined;
  Develop: undefined;
};
const Tab = createBottomTabNavigator();

export default function MainNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="Develop"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          var iconName: string;
          switch (route.name) {
            case 'HomeNav':
              iconName = 'home';
              break;
            case 'Invoice':
              iconName = 'file-invoice-dollar';
              break;
            case 'Tenant':
              iconName = 'users';
              break;
            case 'Chat':
              iconName = 'inbox';
              break;
            case 'Problem':
              iconName = 'house-damage';
              break;
            case 'Develop':
              iconName = 'dev';
              break;
            default:
              iconName = '';
          }
          return (
            <FontAwesome5
              name={iconName}
              size={25}
              style={{color: focused ? '#eb344f' : '#808080'}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen name="Invoice" component={InvoiceSection} />
      <Tab.Screen name="Tenant" component={TenantSection} />
      <Tab.Screen name="Chat" component={HomeScreen} />
      <Tab.Screen name="Problem" component={HomeScreen} />
      <Tab.Screen name="Develop" component={CreateRoom} />
    </Tab.Navigator>
  );
}
