import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '@screens/manage-app/home/home.screen';
import CustomDrawer from './custom-drawer';
import { VoidScreen } from '@screens/void';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ManageHostelScreen from '@screens/manage-app/manage-hostel/manage-hostel.screen';
import { StyleSheet, View } from 'react-native';

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
          title: 'Manager Dashboard',
          drawerIcon: ({ size }) => (
            <View style={{ width: 20, height: 20 }}><FontAwesome5Icon name="home" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="ManageHostel"
        component={ManageHostelScreen}
        options={{
          title: 'Manage Hostels',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="building" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Services"
        component={VoidScreen}
        options={{
          title: 'Services',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="building" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="ElectricAndWater"
        component={VoidScreen}
        options={{
          title: 'Electric and Water',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="faucet" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Contracts"
        component={VoidScreen}
        options={{
          title: 'Contracts',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="file-contract" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Tenants"
        component={VoidScreen}
        options={{
          title: 'Tenants',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="users" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Finance"
        component={VoidScreen}
        options={{
          title: 'Finance',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><MaterialCommunityIcons name="finance" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Report"
        component={VoidScreen}
        options={{
          title: 'Report',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><MaterialIcons name="report-problem" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Chat"
        component={VoidScreen}
        options={{
          title: 'Chat',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><Ionicons name="chatbox-ellipses-sharp" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="BussinessAnalytics"
        component={VoidScreen}
        options={{
          title: 'Bussiness and Analytics',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><Ionicons name="analytics" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Problem"
        component={VoidScreen}
        options={{
          title: 'Problem',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="house-damage" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="AssetManagement"
        component={VoidScreen}
        options={{
          title: 'Asset Management',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="building" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Roles"
        component={VoidScreen}
        options={{
          title: 'Roles',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}><FontAwesome5Icon name="user-lock" size={size} /></View>
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={VoidScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({ size }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="miscellaneous-services"
                size={size}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 25, 
    height:25,
  }
})