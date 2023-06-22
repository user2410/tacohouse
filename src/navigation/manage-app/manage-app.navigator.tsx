import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageHomeScreen from '@screens/manage-app/home/home.screen';
import ManageInvoiceScreen from '@screens/manage-app/invoice/invoice.screen';
import CreateRoomScreen from '@screens/manage-app/room/create-room/create-room.screen';
import EditRoomScreen from '@screens/manage-app/room/edit-room/edit-room.screen';
import ManageRoomsScreen from '@screens/manage-app/room/manage-room/manage-room.screen';
import { SingleRoomScreen } from '@screens/manage-app/room/single-room/single-room.screen';
import ManageTenantsScreen from '@screens/manage-app/tenant/manage-tenant/manage-tenant.screen';
import SingleTenantScreen from '@screens/manage-app/tenant/single-tenant/single-tenant.screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export type ManageAppParamList = {
  Home: undefined;
  ManageInvoices: undefined;
  Chat: undefined;
  Problem: undefined;

  ManageRooms: undefined;
  CreateRoom: undefined;
  EditRoom: { id: string };
  SingleRoom: { id: string };

  ManageTenants: undefined;
  SingleTenant: { id: string };
};
const Tab = createBottomTabNavigator();

export default function ManageAppNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          var iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'ManageInvoices':
              iconName = 'file-invoice-dollar';
              break;
            case 'ManageTenants':
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
              style={{ color: focused ? '#eb344f' : '#808080' }}
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
      <Tab.Screen
        name="ManageInvoices"
        component={ManageInvoiceScreen}
        options={{
          headerTitle: 'Manage Invoices',
          tabBarLabel: 'Invoices',
        }} />
      <Tab.Screen
        name="ManageRooms"
        component={ManageRoomsScreen}
        options={{
          headerTitle: 'Manage Rooms',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="CreateRoom"
        component={CreateRoomScreen}
        options={{
          headerTitle: 'Create Room',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="EditRoom"
        component={EditRoomScreen}
        options={{
          headerTitle: 'Edit Room',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="SingleRoom"
        component={SingleRoomScreen}
        options={{
          headerTitle: 'Single Room',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="ManageTenants"
        component={ManageTenantsScreen}
        options={{
          headerTitle: 'Manage Tenants',
          tabBarLabel: 'Tenants',
        }} />
      <Tab.Screen
        name="SingleTenant"
        component={SingleTenantScreen}
        options={{
          headerTitle: 'Single Tenant',
          tabBarButton: () => null
        }} />
      <Tab.Screen name="Chat" component={ManageHomeScreen} />
      <Tab.Screen name="Problem" component={ManageHomeScreen} />
    </Tab.Navigator>
  );
}
