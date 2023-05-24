import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeNavigator from './Home/HomeNavigator';

export type MainTabParamList = {
  HomeNav: undefined;
  Invoice: undefined;
  Tenant: undefined;
  Chat: undefined;
  Problem: undefined;
};
const Tab = createBottomTabNavigator();

export default function MainNavigator(): React.ReactElement {
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
              iconName = 'screwdriver';
              break;
            default:
              iconName = '';
          }
          return <FontAwesome5 name={iconName} size={25} />;
        },
      })}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Invoice" component={HomeScreen} />
      <Tab.Screen name="Tenant" component={HomeScreen} />
      <Tab.Screen name="Chat" component={HomeScreen} />
      <Tab.Screen name="Problem" component={HomeScreen} />
    </Tab.Navigator>
  );
}
