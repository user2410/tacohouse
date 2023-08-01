import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageHomeScreen from '@screens/manage-app/home/home.screen';
import ManageInvoiceScreen from '@screens/manage-app/invoice/invoice.screen';
import CreatePropertyScreen from '@screens/manage-app/property/create-property/create-property.screen';
import EditPropertyScreen from '@screens/manage-app/property/edit-property/edit-property.screen';
import ManagePropertiesScreen from '@screens/manage-app/property/manage-properties/manage-properties.screen';
import { SinglePropertyScreen } from '@screens/manage-app/property/single-property/single-property.screen';
import ManageTenantsScreen from '@screens/manage-app/tenant/manage-tenant/manage-tenant.screen';
import SingleTenantScreen from '@screens/manage-app/tenant/single-tenant/single-tenant.screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export type ManageAppParamList = {
  Home: undefined;
  ManageInvoices: undefined;
  // Chat: undefined;
  ManageProperties: undefined;
  ManageTenants: undefined;
  
  CreateProperty: undefined;
  EditProperty: { id: string };
  SingleProperty: { id: string };
  
  SingleTenant: { id: string };

  Problem: undefined;
};
const Tab = createBottomTabNavigator();

export default function ManageAppNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#eb344f',
        },
        headerTintColor: '#fff',
      })}>
      <Tab.Screen
        name="Home"
        component={ManageHomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="home"
              size={25}
              style={{ color: focused ? '#eb344f' : '#808080' }}
            />
          )
        }}
      />
      <Tab.Screen
        name="ManageProperties"
        component={ManagePropertiesScreen}
        options={{
          headerTitle: 'Manage Properties',
          tabBarLabel: 'Properties',
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="building"
              size={25}
              style={{ color: focused ? '#eb344f' : '#808080' }}
            />
          )
        }} />
      <Tab.Screen
        name="ManageTenants"
        component={ManageTenantsScreen}
        options={{
          headerTitle: 'Manage Tenants',
          tabBarLabel: 'Tenants',
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="users"
              size={25}
              style={{ color: focused ? '#eb344f' : '#808080' }}
            />
          )
        }} />
      <Tab.Screen
        name="ManageInvoices"
        component={ManageInvoiceScreen}
        options={{
          headerTitle: 'Manage Invoices',
          tabBarLabel: 'Invoices',
          tabBarIcon: ({focused}) => (
            <FontAwesome5Icon
              name="file-invoice-dollar"
              size={25}
              style={{ color: focused ? '#eb344f' : '#808080' }}
            />
          )
        }} />
      <Tab.Screen
        name="CreateProperty"
        component={CreatePropertyScreen}
        options={{
          headerTitle: 'Create Property',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="EditProperty"
        component={EditPropertyScreen}
        options={{
          headerTitle: 'Edit Property',
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="SingleProperty"
        component={SinglePropertyScreen}
        options={{
          tabBarButton: () => null
        }} />
      <Tab.Screen
        name="SingleTenant"
        component={SingleTenantScreen}
        options={{
          headerTitle: 'Single Tenant',
          tabBarButton: () => null
        }} />
      {/* <Tab.Screen name="Chat" component={ManageHomeScreen} /> */}
      <Tab.Screen 
        name="Problem" 
        component={ManageHomeScreen} 
        options={{
          tabBarButton: () => null
        }}/>
    </Tab.Navigator>
  );
}
