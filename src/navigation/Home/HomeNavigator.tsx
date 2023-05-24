import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '@screens/Home';
import CustomDrawer from './CustomDrawer';

export type HomeDrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'left',
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#eb344f',
        },
        headerTintColor: '#fff',
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
