import {ListingNavigatorParams} from '@navigation/listing-app/listing-app.navigator';
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
