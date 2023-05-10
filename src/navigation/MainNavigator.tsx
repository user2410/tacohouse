import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
};
const Tab = createBottomTabNavigator();

export default function MainNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          var iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            default:
              iconName = 'stream';
          }
          return <FontAwesome5 name={iconName} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
      <Tab.Screen name="Setting" component={HomeScreen} />
    </Tab.Navigator>
  );
}
