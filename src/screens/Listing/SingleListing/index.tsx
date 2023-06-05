import {ListingNavigatorParams} from '@navigation/ListingNavigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

export default function SingleListing(): React.ReactElement {
  const route = useRoute<RouteProp<ListingNavigatorParams>>();

  return (
    <SafeAreaView>
      <Text>Single listing</Text>
    </SafeAreaView>
  );
}
