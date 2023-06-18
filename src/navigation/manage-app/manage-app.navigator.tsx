import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/manage-app/home/home.screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeNavigator from './home/home.navigator';

export type ManageAppParamList = {
  HomeNav: undefined;
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
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#eb344f',
        },
        headerTintColor: '#fff',
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
    </Tab.Navigator>
  );
}
