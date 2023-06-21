import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ManageHomeScreen from '@screens/manage-app/home/home.screen';
import { View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export type ManageAppParamList = {
  Home: undefined;
  Invoice: undefined;
  Tenant: undefined;
  Chat: undefined;
  Problem: undefined;
};
const Tab = createBottomTabNavigator();

export default function ManageAppNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          var iconName: string;
          switch (route.name) {
            case 'Home':
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
            default:
              iconName = '';
          }
          return (
            <FontAwesome5Icon
              name={iconName}
              size={25}
              style={{color: focused ? '#eb344f' : '#808080'}}
            />
          );
        },
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#eb344f',
        },
        headerTintColor: '#fff',
      })}>
      <Tab.Screen
        name="Home"
        component={ManageHomeScreen}
      />
      <Tab.Screen name="Invoice" component={ManageHomeScreen} />
      <Tab.Screen name="Tenant" component={ManageHomeScreen} />
      <Tab.Screen name="Chat" component={ManageHomeScreen} />
      <Tab.Screen name="Problem" component={ManageHomeScreen} />
    </Tab.Navigator>
  );
}
