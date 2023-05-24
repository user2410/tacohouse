import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '@screens/Home';
import CustomDrawer from './CustomDrawer';
import {VoidScreen} from '@screens/void';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type HomeDrawerParamList = {
  Home: undefined;
  ManageHostel: undefined;
  Services: undefined;
  ElectricAndWater: undefined;
  Contracts: undefined;
  Tenants: undefined;
  Finance: undefined;
  Report: undefined;
  Chat: undefined;
  BussinessAnalytics: undefined;
  Problem: undefined;
  AssetManagement: undefined;
  Roles: undefined;
  Settings: undefined;
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
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="home" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="ManageHostel"
        component={VoidScreen}
        options={{
          title: 'Manage Hostels',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="building" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Services"
        component={VoidScreen}
        options={{
          title: 'Services',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="building" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="ElectricAndWater"
        component={VoidScreen}
        options={{
          title: 'Electric and Water',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="faucet" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contracts"
        component={VoidScreen}
        options={{
          title: 'Contracts',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="file-contract" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Tenants"
        component={VoidScreen}
        options={{
          title: 'Tenants',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="users" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Finance"
        component={VoidScreen}
        options={{
          title: 'Finance',
          drawerIcon: ({focused}) => (
            <MaterialCommunityIcons name="finance" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Report"
        component={VoidScreen}
        options={{
          title: 'Report',
          drawerIcon: ({focused}) => (
            <MaterialIcons name="report-problem" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={VoidScreen}
        options={{
          title: 'Chat',
          drawerIcon: ({focused}) => (
            <Ionicons name="chatbox-ellipses-sharp" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="BussinessAnalytics"
        component={VoidScreen}
        options={{
          title: 'Bussiness and Analytics',
          drawerIcon: ({focused}) => (
            <Ionicons name="analytics" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Problem"
        component={VoidScreen}
        options={{
          title: 'Problem',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="house-damage" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="AssetManagement"
        component={VoidScreen}
        options={{
          title: 'Asset Management',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="building" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Roles"
        component={VoidScreen}
        options={{
          title: 'Roles',
          drawerIcon: ({focused}) => (
            <FontAwesome5Icon name="user-lock" size={focused ? 22 : 20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={VoidScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focused}) => (
            <MaterialIcons
              name="miscellaneous-services"
              size={focused ? 22 : 20}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
