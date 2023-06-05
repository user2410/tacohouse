import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingHomeScreen from '@screens/Listing/Home';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SingleListing from '@screens/Listing/SingleListing';

export type ListingNavigatorParams = {
  Home: {city: string};
  Search: undefined;
  // SingleListing: undefined;
  Listings: undefined;
  Chat: undefined;
};

const Tab = createBottomTabNavigator<ListingNavigatorParams>();

export default function ListingNavigator(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          var iconName: string;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
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
      {/* <Tab.Screen name="Listings" component={}/> */}
      {/* <Tab.Screen name="Chat" component={}/> */}
    </Tab.Navigator>
  );
}
