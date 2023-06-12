import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeNavigator from './Home/HomeNavigator';
import { SingleRoom } from '@screens/SingleRoom';
import RoomSection from '@components/RoomSection';
import InvoiceSection from '@components/InvoiceSection';
import CreateRoom from '@screens/SingleRoom/CreateRoom';
import EditRoom from '@screens/SingleRoom/EditRoom';
import UserSection from '@components/TenantSection';

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
      <Tab.Screen name="Invoice" component={HomeScreen} />
      <Tab.Screen name="Tenant" component={HomeScreen} />
      <Tab.Screen name="Chat" component={HomeScreen} />
      <Tab.Screen name="Problem" component={HomeScreen} />
      <Tab.Screen name="Develop" component={UserSection} />
    </Tab.Navigator>
  );
}
