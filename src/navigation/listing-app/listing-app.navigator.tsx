import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingHomeScreen from '@screens/listing-app/home/home.screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ListingManageScreen from '@screens/listing-app/manage-listings/listings-manage.screen';
import ListingAccountScreen from '@screens/listing-app/account/account.screen';

export type ListingNavigatorParams = {
  Home: {city: string};
  Search: undefined;
  // SingleListing: undefined;
  ManageListings: undefined;
  Chat: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<ListingNavigatorParams>();

export default function ListingAppNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          var iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'ManageListings':
              iconName = 'list';
              break;
            case 'Account':
              iconName = 'user';
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
      })}>
      <Tab.Screen
        name="Home"
        component={ListingHomeScreen}
        options={{headerShown: false}}
        initialParams={{city: 'hanoi'}}
      />
      {/* <Tab.Screen name="Search" component={}/> */}
      {/* <Tab.Screen name="SingleListing" component={SingleListing} /> */}
      <Tab.Screen
        name="ManageListings"
        component={ListingManageScreen}
        options={{
          title: 'Manage Listings',
        }}
      />
      {/* <Tab.Screen name="Chat" component={}/> */}
      <Tab.Screen name="Account" component={ListingAccountScreen} />
    </Tab.Navigator>
  );
}
